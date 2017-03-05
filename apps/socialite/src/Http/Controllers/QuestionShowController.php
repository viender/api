<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Question;

class QuestionShowController extends Controller
{
	public function show(Question $question)
	{
		if(\Agent::isDesktop()) {
			return view('viender.socialite.questionShow::index');
		} else {
			return view('viender.socialite.questionShow::index-mobile');
		}
	}
}