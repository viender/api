<?php

namespace App\Ideapool\Http\Controllers\Api\Version1;

use App\Ideapool\Bid;
use Illuminate\Http\Request;
use App\Ideapool\Viender\Transformers\Version1\BidTransformer;
use App\Ideapool\Http\Controllers\Api\Version1\Handlers\BasicHandler;

class BidsController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Bid::class, BidTransformer::class);
    }

    /** 
     * @api {get} /bids Get Bids
     * @apiName BidsIndex
     * @apiGroup BidGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse BidIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /bids Create Bids
     * @apiName BidsStore
     * @apiGroup BidGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse BidRequestBodyParam
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
     * @api {get} /bids/:id Get Bid
     * @apiName BidsShow
     * @apiGroup BidGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse BidShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Bid $bid)
    {
        return $this->handler->show($bid);
    }

    /**
     * @api {put} /bids/:id Update Bid
     * @apiName BidsUpdate
     * @apiGroup BidGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse BidRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bid $bid)
    {
        return $this->handler->update($request, $bid);
    }

    /**
     * @api {delete} /bids/:id Delete Bid
     * @apiName BidsDelete
     * @apiGroup BidGroup
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
    public function destroy(Bid $bid)
    {
        return $this->handler->destroy($bid);
    }
}