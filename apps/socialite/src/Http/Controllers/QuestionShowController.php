<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Question;

class QuestionShowController extends Controller
{
	public function show(Question $question)
	{
        $metaTitle = $question->title . ' - Viender';
		return view('viender.socialite.questionShow::index')->with(compact('question', 'metaTitle'));
	}
}
