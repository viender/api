<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Viender\Imaginary\Imaginary;
use Illuminate\Support\Facades\Storage;

class UsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function update(Request $request)
    {
        $user = \Auth::user();

        if ($request->profile_picture) {
            $imgPath = Storage::disk('local')->put('temp', $request->file('profile_picture'));

            $originalUrl = Storage::putFile('public/images/original', new File(Imaginary::resize([
                'path' => 'viender/storage/app/' . $imgPath,
                'width' => 1200,
            ])));

            $smallUrl = Storage::putFile('public/images/1x', new File(Imaginary::crop([
                'path' => 'viender/storage/app/' . $imgPath,
                'width' => 48,
                'height' => 48,
            ])));

            $mediumUrl = Storage::putFile('public/images/2x', new File(Imaginary::crop([
                'path' => 'viender/storage/app/' . $imgPath,
                'width' => 96,
                'height' => 96,
            ])));

            $largeUrl = Storage::putFile('public/images/3x', new File(Imaginary::crop([
                'path' => 'viender/storage/app/' . $imgPath,
                'width' => 192,
                'height' => 192,
            ])));

            $request->request->add([
                'avatar_url' => $smallUrl,
                'avatar_medium_url' => $mediumUrl,
                'avatar_large_url' => $largeUrl,
                'avatar_original_url' => $originalUrl,
            ]);
        }

        $input = $request->all();

        if ($request->tutorial_complete_at) {
            $date = new Carbon($request->tutorial_complete_at);
            $input['tutorial_complete_at'] = $date->toDateTimeString();
        }


        $user->update($input);

        return redirect()->back();
    }
}
