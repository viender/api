<?php

namespace App\Ideapool\Http\Controllers\Api\Version1;

use App\Ideapool\Answer;
use App\Ideapool\Downvote;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Ideapool\Viender\Transformers\Version1\DownvoteTransformer;

class AnswerDownvotesController extends ApiController
{
    /** 
     * @api {get} /answers/:id/downvotes Get Answer Downvotes
     * @apiName AnswerDownvotesIndex
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiUse DownvoteIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Answer $answer)
    {
        $paginator = $answer->downvotes()->paginate();

        return $this->respondWithPagination($paginator, new DownvoteTransformer);
    }

    /**
     * @api {post} /answers/:id/downvotes Create Answer Downvote
     * @apiName AnswerDownvotesStore
     * @apiGroup AnswerGroup
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
    public function store(Request $request, Answer $answer)
    {
        $answer->downvotes()->save(new Downvote($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /answers/:id/downvotes/:id Get Answer Downvote
     * @apiName AnswerDownvotesShow
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse DownvoteShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Answer $answer, $downvote)
    {
        $downvote = $answer->downvotes()->findOrFail($downvote);

        return $this->respond(new Item($downvote, new DownvoteTransformer));
    }

    /**
     * @api {put} /answers/:id/downvotes/:id Update Answer Downvote
     * @apiName AnswerDownvotesUpdate
     * @apiGroup AnswerGroup
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
    public function update(Request $request, Answer $answer, $downvote)
    {
        $downvote = $answer->downvotes()->findOrFail($downvote);

        $downvote->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /answers/:id/downvotes/:id Delete Answer Downvote
     * @apiName AnswerDownvotesDelete
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
    public function destroy(Answer $answer, $downvote)
    {
        $downvote = $answer->downvotes()->findOrFail($downvote);
        
        $downvote->delete();

        return $this->respondDeleted();
    }
}