<?php

namespace Viender\Socialite\Http\Controllers;


class FeedController extends Controller
{
	public function index()
	{
		if(\Agent::isDesktop()) {
        	return view('viender.socialite.feed::index');
		} else {
			return view('viender.socialite.feed::index-mobile');
		}
	}
}