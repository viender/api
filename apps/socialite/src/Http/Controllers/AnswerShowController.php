<?php

namespace Viender\Socialite\Http\Controllers;

use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Question;
use Viender\Address\Transformers\UserTransformer;
use Viender\Socialite\Transformers\AnswerTransformer;
use Viender\Socialite\Transformers\QuestionTransformer;
use Viender\Credential\Transformers\CredentialTransformer;

class AnswerShowController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

	public function show(Question $question, $answerSlug)
	{

        $answer = Answer::where([
            'question_id'   => $question->id,
            'slug'          => $answerSlug,
        ])->firstOrFail();

        if (\Auth::user()) {
            return view('viender.socialite.answerShow::index')->with(compact('answer'));
        }


        $answerTransformer = new AnswerTransformer;
        $userTransformer = new UserTransformer;
        $questionTransformer = new QuestionTransformer;
        $credentialTransformer = new CredentialTransformer;


        $transformedAnswer = $answerTransformer->transform($answer);
        $transformedAnswer['owner'] = $userTransformer->transform($answer->user);
        $transformedAnswer['question'] = $questionTransformer->transform($answer->question);
        $transformedAnswer['credential'] = $answer->credential === null ? [] : $credentialTransformer->transform($answer->credential);

        return view('viender.socialite.answerShow::static')->with(compact('transformedAnswer'));
	}
}
