<?php

namespace Viender\Dealer\Http\Controllers\Api;

use Viender\Dealer\Auction;
use Illuminate\Http\Request;
use Viender\Dealer\Transformers\AuctionTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;

class AuctionsController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Auction::class, AuctionTransformer::class);
    }

    /** 
     * @api {get} /auctions Get Auctions
     * @apiName AuctionsIndex
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse AuctionIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /auctions Create Auction
     * @apiName AuctionsStore
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse AuctionRequestBodyParam
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
     * @api {get} /auctions/:slug Get Auction
     * @apiName AuctionsShow
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse AuctionShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Auction $auction)
    {
        return $this->handler->show($auction);
    }

    /**
     * @api {put} /auctions/:slug Update Auction
     * @apiName AuctionsUpdate
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse AuctionRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Auction $auction)
    {
        return $this->handler->update($request, $auction);
    }

    /**
     * @api {delete} /auctions/:slug Delete Auction
     * @apiName AuctionsDelete
     * @apiGroup AuctionGroup
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
    public function destroy(Auction $auction)
    {
        return $this->handler->destroy($auction);
    }
}