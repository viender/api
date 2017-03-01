<?php

namespace Viender\Socialite\Http\Controllers;


class PagesController extends Controller
{
	public function feed()
	{
        return view('viender.socialite.feed::index');
	}

	public function answer()
	{
		return view('viender.socialite.answer::index');
	}
}