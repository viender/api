<?php

namespace Viender\Dealer\Http\Controllers\Api\Version1;

use Viender\Dealer\Auction;
use Viender\Socialite\Tag;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Transformers\Version1\TagTransformer;

class AuctionTagsController extends ApiController
{
    /** 
     * @api {get} /auctions/:slug/tags Get Auction Tags
     * @apiName AuctionTagsIndex
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse TagIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Auction $auction)
    {
        $paginator = $auction->tags()->paginate();

        return $this->respondWithPagination($paginator, new TagTransformer);
    }

    /**
     * @api {post} /auctions/:slug/tags Create Auction Tag
     * @apiName AuctionTagsStore
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse TagRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Auction $auction)
    {
        if( ! $auction->tags()->find($request->tag_id)) {
            $auction->tags()->attach(Tag::findOrFail($request->tag_id));
        }

        return $this->respondCreated();
    }

    /**
     * @api {get} /auctions/:slug/tags/:id Get Auction Tag
     * @apiName AuctionTagsShow
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse TagShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Auction $auction, $tag)
    {
        $tag = $auction->tags()->findOrFail($tag);

        return $this->respond(new Item($tag, new TagTransformer));
    }

    /**
     * @api {put} /auctions/:slug/tags/:id Update Auction Tag
     * @apiName AuctionTagsUpdate
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse TagRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Auction $auction, $tag)
    {
        abort(405);
    }

    /**
     * @api {delete} /auctions/:slug/tags/:id Delete Auction Tag
     * @apiName AuctionTagsDelete
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
    public function destroy(Auction $auction, $tag)
    {
        $auction->tags()->detach($auction->tags()->findOrFail($tag));

        return $this->respondDeleted();
    }
}