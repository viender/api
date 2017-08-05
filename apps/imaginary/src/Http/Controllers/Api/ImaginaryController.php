<?php

namespace Viender\Imaginary\Http\Controllers\Api;

use Illuminate\Http\File;
use Illuminate\Http\Request;
use Viender\Imaginary\Imaginary;
use Illuminate\Support\Facades\Storage;


class ImaginaryController extends ApiController
{
    public function upload(Request $request)
    {
        $imaginary = new Imaginary;
        return $imaginary->uploadUploadedPicture($request->file('file'), 'picture');
    }
}
