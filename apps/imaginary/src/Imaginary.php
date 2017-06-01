<?php

namespace Viender\Imaginary;

use GuzzleHttp\Client;
use Illuminate\Http\File;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

class Imaginary
{
    protected $http;

    public function __construct()
    {
        $this->http = new Client([
            'base_uri' => 'http://' . config('services.imaginary.host') . ':' . config('services.imaginary.port'),
        ]);
    }

	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\Imaginary\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        });
	}

    public function crop(array $payload)
    {
        if (!isset($payload['url']) && !isset($payload['path'])) return null;
        if (!isset($payload['width']) || !isset($payload['height'])) return null;

        $response = null;

        $resizedUrl = sprintf('http://%s:%s/crop?width=%d&height=%d&%s=%s',
            config('services.imaginary.host'),
            config('services.imaginary.port'),
            $payload['width'],
            $payload['height'],
            isset($payload['url']) ? 'url' : 'file',
            isset($payload['url']) ? $payload['url'] : (isset($payload['path']) ? $payload['path'] : '')
        );

        $filename = 'image.jpg';
        $tempImage = tempnam(sys_get_temp_dir(), $filename);
        copy($resizedUrl,  $tempImage);

        return $tempImage;
    }

    public function resize(array $payload)
    {
        if (!isset($payload['url']) && !isset($payload['path'])) return null;
        if (!isset($payload['width']) && !isset($payload['height'])) return null;
        if (isset($payload['width']) && isset($payload['height'])) return null;

        $response = null;

        $resizedUrl = sprintf('http://%s:%s/resize?%s&%s=%s',
            config('services.imaginary.host'),
            config('services.imaginary.port'),
            isset($payload['width']) ? 'width=' . $payload['width'] : 'height=' . $payload['height'],
            isset($payload['url']) ? 'url' : 'file',
            isset($payload['url']) ? $payload['url'] : (isset($payload['path']) ? $payload['path'] : '')
        );

        $filename = 'image.jpg';
        $tempImage = tempnam(sys_get_temp_dir(), $filename);
        copy($resizedUrl,  $tempImage);

        return $tempImage;
    }

    public function uploadProfilePicture(UploadedFile $uploadedFile)
    {
        $imgPath = Storage::disk('local')->put('temp', $uploadedFile);

        $originalUrl = Storage::putFile('public/images/original', new File($this->resize([
            'path' => 'viender/storage/app/' . $imgPath,
            'width' => 512,
        ])));

        $smallUrl = Storage::putFile('public/images/1x', new File($this->crop([
            'path' => 'viender/storage/app/' . $imgPath,
            'width' => 48,
            'height' => 48,
        ])));

        $mediumUrl = Storage::putFile('public/images/2x', new File($this->crop([
            'path' => 'viender/storage/app/' . $imgPath,
            'width' => 96,
            'height' => 96,
        ])));

        $largeUrl = Storage::putFile('public/images/3x', new File($this->crop([
            'path' => 'viender/storage/app/' . $imgPath,
            'width' => 192,
            'height' => 192,
        ])));

        return [
            'avatar_url' => $smallUrl,
            'avatar_medium_url' => $mediumUrl,
            'avatar_large_url' => $largeUrl,
            'avatar_original_url' => $originalUrl,
        ];
    }
}
