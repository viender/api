<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Question;


class PagesController extends Controller
{
	public function feed()
	{
		if(\Agent::isDesktop()) {
        	return view('viender.socialite.feed::index');
		} else {
			return view('viender.socialite.feed::index-mobile');
		}
	}

	public function answers()
	{
		if(\Agent::isDesktop()) {
			return view('viender.socialite.answer::index');
		} else {
			return view('viender.socialite.answer::index-mobile');
		}
	}

	public function question(Question $question)
	{
		if(\Agent::isDesktop()) {
			return view('viender.socialite.answer::index');
		} else {
			return view('viender.socialite.answer::index-mobile');
		}
	}

	public function answer(Question $question, $id)
	{
		if(\Agent::isDesktop()) {
			return view('viender.socialite.answer::index');
		} else {
			return view('viender.socialite.answer::index-mobile');
		}
	}
}