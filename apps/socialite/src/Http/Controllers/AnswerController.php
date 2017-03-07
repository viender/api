<?php

namespace Viender\Socialite\Http\Controllers;


class AnswerController extends Controller
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
    
	public function index()
	{
		if(\Agent::isDesktop()) {
			return view('viender.socialite.answer::index');
		} else {
			return view('viender.socialite.answer::index-mobile');
		}
	}
}