<?php

namespace Viender\Raa\Http\Controllers\Api;

use Illuminate\Http\Request;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Question;

class SearchController extends ApiController
{
    public function index(Request $request)
    {
        if ($request->q) {
            $answers = Answer::search($request->q)->paginate();

            if ($answers->count() > 0) return $answers;

            $questions = Question::search($request->q)->paginate();

            if ($questions->count() > 0) return $questions;
        }

        $topics = Question::search($request->q)->paginate();

        return $topics;
    }
}
