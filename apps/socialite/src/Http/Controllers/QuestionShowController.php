<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Question;

class QuestionShowController extends Controller
{
	public function show(Question $question)
	{
		return view('viender.socialite.questionShow::index');
	}
}