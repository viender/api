<?php

namespace Viender\Ideapool\Http\Controllers\Api\Version1;

use Viender\Ideapool\Question;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Ideapool\Repositories\QuestionsRepository;
use Viender\Ideapool\Transformers\Version1\QuestionTransformer;
use Viender\Ideapool\Http\Controllers\Api\Version1\Handlers\BasicHandler;

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
        return $this->handler->index();
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
    public function destroy(Question $question)
    {
        return $this->handler->destroy($question);
    }
}