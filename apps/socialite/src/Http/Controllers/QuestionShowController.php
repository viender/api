<?php

namespace Viender\Socialite\Http\Controllers;

use Illuminate\Http\Request;
use Viender\Socialite\Models\Question;

class QuestionShowController extends Controller
{
	public function show(Request $request, Question $question)
	{
        $metaTitle = $question->title . ' - Viender';
		return view('viender.socialite.questionShow::index')->with(compact('question', 'metaTitle'));
	}
}
