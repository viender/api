<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Question;

class AnswerShowController extends Controller
{
	public function show(Question $question, $id)
	{
		if(\Agent::isDesktop()) {
			return view('viender.socialite.answerShow::index');
		} else {
			return view('viender.socialite.answerShow::index-mobile');
		}
	}
}