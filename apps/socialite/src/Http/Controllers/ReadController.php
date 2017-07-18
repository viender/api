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
        $metaDescription = "Viender is place to gain and share knowledge. It's a platform to ask questions and get unique insights and quality answers from various people.";

        if (\Auth::user()) {
            return view('viender.socialite.read::index')->with(compact('metaDescription'));
        } else {
            return view('welcome')->with(compact('metaDescription'));
        }
	}
}
