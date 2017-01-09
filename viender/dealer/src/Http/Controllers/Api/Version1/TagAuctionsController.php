<?php

namespace Viender\Socialite\Http\Controllers\Api\Version1;

use Viender\Socialite\Tag;
use Viender\Dealer\Auction;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Transformers\Version1\AuctionTransformer;

class TagAuctionsController extends ApiController
{
    /** 
     * @api {get} /tags/:id/auctions Get Tag Auctions
     * @apiName TagAuctionsIndex
     * @apiGroup TagGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse AuctionIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Tag $tag)
    {
        $paginator = $tag->auctions()->paginate();

        return $this->respondWithPagination($paginator, new AuctionTransformer);
    }

    /**
     * @api {post} /tags/:id/auctions Create Tag Auction
     * @apiName TagAuctionsStore
     * @apiGroup TagGroup
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
    public function store(Request $request, Tag $tag)
    {
        $tag->auctions()->save(new Auction($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /tags/:id/auctions/:slug Get Tag Auction
     * @apiName TagAuctionsShow
     * @apiGroup TagGroup
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
    public function show(Tag $tag, $auction)
    {
        $auction = $tag->auctions()->findOrFail($auction);

        return $this->respond(new Item($auction, new AuctionTransformer));
    }

    /**
     * @api {put} /tags/:id/auctions/:slug Update Tag Auction
     * @apiName TagAuctionsUpdate
     * @apiGroup TagGroup
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
    public function update(Request $request, Tag $tag, $auction)
    {
        $auction = $tag->auctions()->findOrFail($auction);

        $auction->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /tags/:id/auctions/:slug Delete Tag Auction
     * @apiName TagAuctionsDelete
     * @apiGroup TagGroup
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
    public function destroy(Tag $tag, $auction)
    {
        $auction = $tag->auctions()->findOrFail($auction);
        
        $auction->delete();

        return $this->respondDeleted();
    }
}