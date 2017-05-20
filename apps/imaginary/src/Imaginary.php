<?php

namespace Viender\Imaginary;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;

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

    public static function crop(array $payload)
    {
        if (!isset($payload['url']) && !isset($payload['path'])) return null;
        if (!isset($payload['width']) || !isset($payload['height'])) return null;

        $me = new static;
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

    public static function resize(array $payload)
    {
        if (!isset($payload['url']) && !isset($payload['path'])) return null;
        if (!isset($payload['width']) && !isset($payload['height'])) return null;
        if (isset($payload['width']) && isset($payload['height'])) return null;

        $me = new static;
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
}
