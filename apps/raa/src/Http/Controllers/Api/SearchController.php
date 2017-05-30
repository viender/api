<?php

namespace Viender\Raa\Http\Controllers\Api;

use Viender\Utilities\Text;
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
        $searchQuery = Text::clean($request->q);

        if ($searchQuery) {
            $topics = Topic::search($searchQuery)->paginate();

            if ($topics->count() > 0) {
                return $this->respondWithPagination($topics, new TopicTransformer);
            }

            // $answers = Answer::search($searchQuery)->paginate();

            // if ($answers->count() > 0) {
            //     return $this->respondWithPagination($answers, new AnswerPreviewTransformer($this->answers));
            // }

            $questions = Question::search($searchQuery)->paginate();

            if ($questions->count() > 0) {
                return $this->respondWithPagination($questions, new QuestionTransformer());
            }
        }

    }
}
