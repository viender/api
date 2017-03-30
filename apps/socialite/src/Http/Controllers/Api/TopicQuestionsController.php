<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Illuminate\Http\Request;
use Viender\Topic\Models\Topic;
use League\Fractal\Resource\Item;
use Viender\Socialite\Models\Question;
use Viender\Socialite\Transformers\QuestionTransformer;

class TopicQuestionsController extends ApiController
{
    /** 
     * @api {get} /users/:username/questions Get User Questions
     * @apiName UserQuestionsIndex
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse QuestionIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Topic $topic)
    {
        $paginator = $topic->questions()->paginate();

        return $this->respondWithPagination($paginator, new QuestionTransformer);
    }
}
