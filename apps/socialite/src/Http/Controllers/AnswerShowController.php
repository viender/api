<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Question;

class AnswerShowController extends Controller
{
	public function show(Question $question, Answer $answer)
	{
		return view('viender.socialite.answerShow::index')->with(compact('answer'));
	}
}