<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Viender\Socialite\Upvote;
use Illuminate\Http\Request;
use Viender\Socialite\Transformers\UpvoteTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;

class UpvotesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Upvote::class, UpvoteTransformer::class);
    }

    /** 
     * @api {get} /upvotes Get Upvotes
     * @apiName UpvotesIndex
     * @apiGroup UpvoteGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse UpvoteIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /upvotes Create Upvote
     * @apiName UpvotesStore
     * @apiGroup UpvoteGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse UpvoteRequestBodyParam
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
     * @api {get} /upvotes/:id Get Upvote
     * @apiName UpvotesShow
     * @apiGroup UpvoteGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse UpvoteShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Upvote $upvote)
    {
        return $this->handler->show($upvote);
    }

    /**
     * @api {put} /upvotes/:id Update Upvote
     * @apiName UpvotesUpdate
     * @apiGroup UpvoteGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse UpvoteRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Upvote $upvote)
    {
        return $this->handler->update($request, $upvote);
    }

    /**
     * @api {delete} /upvotes/:id Delete Upvote
     * @apiName UpvotesDelete
     * @apiGroup UpvoteGroup
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
    public function destroy(Upvote $upvote)
    {
        return $this->handler->destroy($upvote);
    }
}