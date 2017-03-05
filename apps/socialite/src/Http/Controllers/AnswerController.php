<?php

namespace Viender\Socialite\Http\Controllers;


class AnswerController extends Controller
{
	public function index()
	{
		if(\Agent::isDesktop()) {
			return view('viender.socialite.answer::index');
		} else {
			return view('viender.socialite.answer::index-mobile');
		}
	}
}