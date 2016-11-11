<?php

namespace App\Http\Controllers\Api\Version1;

use App\Auction;
use App\Bid;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\BidTransformer;

class AuctionBidsController extends ApiController
{
    /** 
     * @api {get} /auctions/:id/bids Get Auction Bids
     * @apiName AuctionBidsIndex
     * @apiGroup Auction
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiSuccess {Object[]} data Array of addresses
     * @apiSuccess {Number} data.id Adresses unique ID
     * @apiSuccess {String} data.street Street name
     * @apiSuccess {String} data.city City name
     * @apiSuccess {String} data.state State name
     * @apiSuccess {String} data.country Country name
     * @apiSuccess {Object[]} data.links Addresses links
     * @apiSuccess {Url} data.links.rel Addresses links rel
     * @apiSuccess {Url} data.links.uri Addresses links uri
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
     * @apiGroup Auction
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiHeader {String} Authorization Personal Access Token
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiParam (Request Body Fields) {Number} user_id Users unique ID
     * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
     * @apiParam (Request Body Fields) {String} name Street name
     *
     * @apiSuccess {String} message Response message
     * @apiSuccess {Number} status_code Response status code
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
     * @apiGroup Auction
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiSuccess {Object} data Array of addresses
     * @apiSuccess {Number} data.id Adresses unique ID
     * @apiSuccess {String} data.street Street name
     * @apiSuccess {String} data.city City name
     * @apiSuccess {String} data.state State name
     * @apiSuccess {String} data.country Country name
     * @apiSuccess {Object[]} data.links Addresses links
     * @apiSuccess {Url} data.links.rel Addresses links rel
     * @apiSuccess {Url} data.links.uri Addresses links uri
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
     * @apiGroup Auction
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiParam (Request Body Fields) {Number} user_id Users unique ID
     * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
     * @apiParam (Request Body Fields) {String} name Street name
     * 
     * @apiSuccess {String} message Response message
     * @apiSuccess {Number} status_code Response status code
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
     * @apiGroup Auction
     * @apiVersion 1.0.0
     * @apiDescription Delete an Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiSuccess {String} message Response message
     * @apiSuccess {Number} status_code Response status code
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