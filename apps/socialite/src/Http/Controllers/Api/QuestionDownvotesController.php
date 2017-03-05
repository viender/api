<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Viender\Socialite\Models\Question;
use Viender\Socialite\Models\Downvote;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Transformers\DownvoteTransformer;

class QuestionDownvotesController extends ApiController
{
    /** 
     * @api {get} /questions/:slug/downvotes Get Question Downvotes
     * @apiName QuestionDownvotesIndex
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse DownvoteIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Question $question)
    {
        $paginator = $question->downvotes()->paginate();

        return $this->respondWithPagination($paginator, new DownvoteTransformer);
    }

    /**
     * @api {post} /questions/:slug/downvotes Create Question Downvote
     * @apiName QuestionDownvotesStore
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse DownvoteRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Question $question)
    {
        $question->downvotes()->save(new Downvote($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /questions/:slug/downvotes/:id Get Question Downvote
     * @apiName QuestionDownvotesShow
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse CommentShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question, $downvote)
    {
        $downvote = $question->downvotes()->findOrFail($downvote);

        return $this->respond(new Item($downvote, new DownvoteTransformer));
    }

    /**
     * @api {put} /questions/:slug/downvotes/:id Update Question Downvote
     * @apiName QuestionDownvotesUpdate
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse DownvoteRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question, $downvote)
    {
        $downvote = $question->downvotes()->findOrFail($downvote);

        $downvote->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /questions/:slug/downvotes/:id Delete Question Downvote
     * @apiName QuestionDownvotesDelete
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
    public function destroy(Question $question, $downvote)
    {
        $downvote = $question->downvotes()->findOrFail($downvote);
        
        $downvote->delete();

        return $this->respondDeleted();
    }
}