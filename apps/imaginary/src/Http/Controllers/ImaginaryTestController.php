<?php

namespace Viender\Imaginary\Http\Controllers;

use Illuminate\Http\File;
use Illuminate\Http\Request;
use Viender\Imaginary\Imaginary;
use Illuminate\Support\Facades\Storage;


class ImaginaryTestController extends Controller
{
    public function index()
    {
        return view('viender.imaginary.imaginary::index');
    }

	public function upload(Request $request)
	{
        $relativeUrl = $request->image->store('public/images/original');

        $smallUrl = Storage::putFile('public/images/small', new File(Imaginary::crop([
            'url' => Storage::url($relativeUrl),
            'width' => 48,
            'height' => 48,
        ])));

        $mediumUrl = Storage::putFile('public/images/medium', new File(Imaginary::crop([
            'url' => Storage::url($relativeUrl),
            'width' => 96,
            'height' => 96,
        ])));

        $largeUrl = Storage::putFile('public/images/large', new File(Imaginary::crop([
            'url' => Storage::url($relativeUrl),
            'width' => 192,
            'height' => 192,
        ])));

        return [Storage::url($smallUrl), Storage::url($mediumUrl), Storage::url($largeUrl)];
	}
}
