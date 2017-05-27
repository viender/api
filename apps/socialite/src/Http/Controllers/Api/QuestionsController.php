<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Downvote;
use Viender\Socialite\Models\Question;
use Viender\Socialite\Repositories\QuestionsRepository;
use Viender\Socialite\Transformers\QuestionTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;

class QuestionsController extends ApiController
{
    private $questions;

    public function __construct(QuestionsRepository $questions)
    {
        parent::__construct();
        $this->questions = $questions;
        $this->handler = new BasicHandler($this, Question::class, QuestionTransformer::class);
    }


    /**
     * @api {get} /questions Get Questions
     * @apiName QuestionsIndex
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiUse QuestionIndexSuccess
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $answered_ids = Answer::withTrashed()->where('user_id', \Auth::user()->id)->pluck('question_id');

        $downvoted_ids = Downvote::where([['user_id', \Auth::user()->id], ['downvotable_type', Question::class]])->pluck('downvotable_id');

        $paginator = Question::whereNotIn('id', $answered_ids->merge($downvoted_ids))->latest('created_at')->paginate();

        return $this->respondWithPagination($paginator, new QuestionTransformer);
    }

    /**
     * @api {post} /questions Create Question
     * @apiName QuestionsStore
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiUse QuestionRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $question = $this->questions->createByUser(\Auth::user(), $request->all());

        return $this->respond(new Item($question, new QuestionTransformer));
    }

    /**
     * @api {get} /questions/:slug Get Question
     * @apiName QuestionsShow
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse QuestionShowSuccess
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
        return $this->handler->show($question);
    }

    /**
     * @api {put} /questions/:slug Update Question
     * @apiName QuestionsUpdate
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse QuestionRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question)
    {
        return $this->handler->update($request, $question);
    }

    /**
     * @api {delete} /questions/:slug Delete Question
     * @apiName QuestionsDelete
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Delete an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse MessageResponseSuccess
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($questionSlug)
    {
        $question = Question::withTrashed()->where('slug', $questionSlug)->firstOrFail();

        if ($question->trashed()) {
            $question->restore();
            return $this->respondUpdated();
        }

        $question->delete();

        return $this->respondDeleted();
    }
}
