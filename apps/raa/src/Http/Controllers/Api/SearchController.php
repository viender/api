<?php

namespace Viender\Raa\Http\Controllers\Api;

use Viender\Raa\Raa;
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
    protected $raa;
    protected $answers;

    public function __construct(AnswersRepository $answers, Raa $raa)
    {
        parent::__construct();
        $this->raa = $raa;
        $this->answers = $answers;
    }

    public function index(Request $request)
    {
        $searchQuery = preg_replace('/[^A-Za-z0-9\-\s]/', '', $request->q);

        if ($searchQuery) {
            if ($request->searchable_type) {
                return $this->raa->specificSearch($searchQuery, $request->searchable_type, $this, $request->all());
            }

            return $this->raa->smartSearch($searchQuery, $this);
        }

        return $this->respondNotFound();
    }
}
