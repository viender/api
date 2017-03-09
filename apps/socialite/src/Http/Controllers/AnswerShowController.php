<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Question;

class AnswerShowController extends Controller
{
	public function show(Question $question, Answer $answer)
	{
		if(\Agent::isDesktop()) {
			return view('viender.socialite.answerShow::index')->with(compact('answer'));
		} else {
			return view('viender.socialite.answerShow::index-mobile')->with(compact('answer'));
		}
	}
}