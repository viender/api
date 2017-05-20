<?php

namespace Viender\Imaginary\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class ImaginaryTestController extends Controller
{
    public function index()
    {
        return view('viender.imaginary.imaginary::index');
    }

	public function imaginary(Request $request)
	{
        $file = $request->image->store('public/images');
        dd(\Storage::url($file));
	}
}
