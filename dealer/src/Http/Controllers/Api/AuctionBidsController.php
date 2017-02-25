<?php

namespace Viender\Dealer\Http\Controllers\Api;

use Viender\Dealer\Auction;
use Viender\Dealer\Bid;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Dealer\Transformers\BidTransformer;

class AuctionBidsController extends ApiController
{
    /** 
     * @api {get} /auctions/:id/bids Get Auction Bids
     * @apiName AuctionBidsIndex
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse BidIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Auction $auction)
    {
        $paginator = $auction->bids()->paginate();

        return $this->respondWithPagination($paginator, new BidTransformer);
    }

    /**
     * @api {post} /auctions/:id/bids Create Auction Bid
     * @apiName AuctionBidsStore
     * @apiGroup AuctionGroup
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
    public function store(Request $request, Auction $auction)
    {
        $auction->bids()->save(new Bid($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /auctions/:id/bids/:id Get Auction Bid
     * @apiName AuctionBidsShow
     * @apiGroup AuctionGroup
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
    public function show(Auction $auction, $bid)
    {
        $bid = $auction->bids()->findOrFail($bid);

        return $this->respond(new Item($bid, new BidTransformer));
    }

    /**
     * @api {put} /auctions/:id/bids/:id Update Auction Bid
     * @apiName AuctionBidsUpdate
     * @apiGroup AuctionGroup
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
    public function update(Request $request, Auction $auction, $bid)
    {
        $bid = $auction->bids()->findOrFail($bid);
        
        $bid->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /auctions/:id/bids/:id Delete Auction Bid
     * @apiName AuctionBidsDelete
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
    public function destroy(Auction $auction, $bid)
    {
        $bid = $auction->bids()->findOrFail($bid);

        $bid->delete();

        return $this->respondDeleted();
    }
}