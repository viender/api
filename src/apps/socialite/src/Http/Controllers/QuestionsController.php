<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Question;

class QuestionsController extends Controller
{
	public function show(Question $question)
	{
		dd($question);
	}

	public function answer(Question $question, $id)
	{
		dd($question->answers()->where('id', $id)->first());
	}
}