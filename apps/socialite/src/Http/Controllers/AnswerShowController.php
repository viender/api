<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Question;

class AnswerShowController extends Controller
{
	public function show(Question $question, $answerSlug)
	{
		$answer = Answer::where([
			'question_id'	=> $question->id,
			'slug'			=> $answerSlug,
		])->firstOrFail();
		
		return view('viender.socialite.answerShow::index')->with(compact('answer'));
	}
}
