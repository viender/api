<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Viender\Socialite\Downvote;
use Illuminate\Http\Request;
use Viender\Socialite\Transformers\DownvoteTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;

class DownvotesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Downvote::class, DownvoteTransformer::class);
    }

    /** 
     * @api {get} /downvotes Get Downvotes
     * @apiName DownvotesIndex
     * @apiGroup DownvoteGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse DownvoteIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /downvotes Create Downvote
     * @apiName DownvotesStore
     * @apiGroup DownvoteGroup
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
    public function store(Request $request)
    {
        return $this->handler->store($request);
    }

    /**
     * @api {get} /downvotes/:id Get Downvote
     * @apiName DownvotesShow
     * @apiGroup DownvoteGroup
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
    public function show(Downvote $downvote)
    {
        return $this->handler->show($downvote);
    }

    /**
     * @api {put} /downvotes/:id Update Downvote
     * @apiName DownvotesUpdate
     * @apiGroup DownvoteGroup
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
    public function update(Request $request, Downvote $downvote)
    {
        return $this->handler->update($request, $downvote);
    }

    /**
     * @api {delete} /downvotes/:id Delete Downvote
     * @apiName DownvotesDelete
     * @apiGroup DownvoteGroup
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
    public function destroy(Downvote $downvote)
    {
        return $this->handler->destroy($downvote);
    }
}