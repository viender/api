<?php

namespace Viender\Socialite\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use Viender\Topic\Models\Topic;
use League\Fractal\Resource\Item;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Repositories\AnswersRepository;
use Viender\Socialite\Transformers\AnswerPreviewTransformer;

class TopicAnswersController extends ApiController
{
    protected $answers;

    public function __construct(AnswersRepository $answers) {
        parent::__construct();
        $this->answers = $answers;
    }

    /** 
     * @api {get} /users/:username/answers Get User Answer
     * @apiName UserAnswersIndex
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse AnswerIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Topic $topic)
    {
        $paginator = $topic->answers()->paginate();

        return $this->respondWithPagination($paginator, new AnswerPreviewTransformer($this->answers));
    }
}
