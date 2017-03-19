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
        $this->middleware('auth');
    }
    
	public function index()
	{
        return view('viender.socialite.read::index');
	}
}