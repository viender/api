<?php

namespace Viender\Ideapool\Http\Controllers\Api\Version1;

use Viender\Ideapool\Answer;
use Illuminate\Http\Request;
use Viender\Ideapool\Transformers\Version1\AnswerTransformer;
use Viender\Ideapool\Http\Controllers\Api\Version1\Handlers\BasicHandler;

class AnswersController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Answer::class, AnswerTransformer::class);
    }

    /** 
     * @api {get} /answers Get Answers
     * @apiName AnswersIndex
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse AnswerIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /answers Create Answers
     * @apiName AnswersStore
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse AnswerRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->handler->store($request);
    }

    /**
     * @api {get} /answers/:id Get Answer
     * @apiName AnswersShow
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse AnswerShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Answer $answer)
    {
        return $this->handler->show($answer);
    }

    /**
     * @api {put} /answers/:id Update Answer
     * @apiName AnswersUpdate
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse AnswerRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Answer $answer)
    {
        return $this->handler->update($request, $answer);
    }

    /**
     * @api {delete} /answers/:id Delete Answer
     * @apiName AnswersDelete
     * @apiGroup AnswerGroup
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
    public function destroy(Answer $answer)
    {
        return $this->handler->destroy($answer);
    }
}