<?php

namespace Viender\Socialite\Http\Controllers;


class ReadController extends Controller
{
	public function index()
	{
		if(\Agent::isDesktop()) {
        	return view('viender.socialite.read::index');
		} else {
			return view('viender.socialite.read::index-mobile');
		}
	}
}