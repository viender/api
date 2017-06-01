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

    public function update(Request $request, Imaginary $imaginary)
    {
        $user = \Auth::user();

        if ($request->profile_picture) {
            $pictureUrls = $imaginary->uploadProfilePicture($request->file('profile_picture'));

            $request->request->add($pictureUrls);
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
