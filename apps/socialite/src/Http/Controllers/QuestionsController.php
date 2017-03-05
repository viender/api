<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Question;

class QuestionsController extends Controller
{
	public function show(Question $question)
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