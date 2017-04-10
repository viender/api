<?php

namespace Viender\Raa\Http\Controllers\Api;

use Illuminate\Http\Request;
use Viender\Topic\Models\Topic;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Question;
use Viender\Topic\Transformers\TopicTransformer;
use Viender\Socialite\Repositories\AnswersRepository;
use Viender\Socialite\Transformers\QuestionTransformer;
use Viender\Socialite\Transformers\AnswerPreviewTransformer;

class SearchController extends ApiController
{
    private $answers;

    public function __construct(AnswersRepository $answers)
    {
        parent::__construct();
        $this->answers = $answers;
    }

    public function index(Request $request)
    {
        if ($request->q) {
            $topics = Topic::search($request->q)->paginate();

            if ($topics->count() > 0) {
                return $this->respondWithPagination($topics, new TopicTransformer);
            }

            // $answers = Answer::search($request->q)->paginate();

            // if ($answers->count() > 0) {
            //     return $this->respondWithPagination($answers, new AnswerPreviewTransformer($this->answers));
            // }

            $questions = Question::search($request->q)->paginate();

            if ($questions->count() > 0) {
                return $this->respondWithPagination($questions, new QuestionTransformer());
            }
        }

    }
}
