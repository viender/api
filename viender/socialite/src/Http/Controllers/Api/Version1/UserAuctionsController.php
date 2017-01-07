<?php

namespace Viender\Socialite\Http\Controllers\Api\Version1;

use App\User;
use Viender\Socialite\Auction;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Transformers\Version1\AuctionTransformer;

class UserAuctionsController extends ApiController
{
    /** 
     * @api {get} /users/:username/auctions Get User Auctions
     * @apiName UserAuctionsIndex
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse AuctionIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->auctions()->paginate();

        return $this->respondWithPagination($paginator, new AuctionTransformer);
    }

    /**
     * @api {post} /users/:username/auctions Create User Auction
     * @apiName UserAuctionsStore
     * @apiGroup UserGroup
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
    public function store(Request $request, User $user)
    {
        $user->auctions()->save(new Auction($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /users/:username/auctions/:id Get User Auction
     * @apiName UserAuctionsShow
     * @apiGroup UserGroup
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
    public function show(User $user, $auction)
    {
        $auction = $user->auctions()->findOrFail($auction);

        return $this->respond(new Item($auction, new AuctionTransformer));
    }

    /**
     * @api {put} /users/:username/auctions/:id Update User Auction
     * @apiName UserAuctionsUpdate
     * @apiGroup UserGroup
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
    public function update(Request $request, User $user, $auction)
    {
        $auction = $user->auctions()->findOrFail($auction);

        $auction->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /users/:username/auctions/:id Delete User Auction
     * @apiName UserAuctionsDelete
     * @apiGroup UserGroup
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
    public function destroy(User $user, $auction)
    {
        $auction = $user->auctions()->findOrFail($auction);
        
        $auction->delete();

        return $this->respondDeleted();
    }
}