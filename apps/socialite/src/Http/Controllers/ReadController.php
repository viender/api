<?php

namespace Viender\Socialite\Http\Controllers;


class ReadController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

	public function index()
	{
        if (\Auth::user()) {
            return view('viender.socialite.read::index');
        } else {
            return view('welcome');
        }
	}
}
