<?php

namespace Viender\Dealer\Http\Controllers\Api;

use App\User;
use Viender\Dealer\Bid;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Dealer\Transformers\BidTransformer;

class UserBidsController extends ApiController
{
    /** 
     * @api {get} /users/:username/bids Get User Bids
     * @apiName UserBidsIndex
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse BidIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->bids()->paginate();

        return $this->respondWithPagination($paginator, new BidTransformer);
    }

    /**
     * @api {post} /users/:username/bids Create User Bid
     * @apiName UserBidsStore
     * @apiGroup UserGroup
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
    public function store(Request $request, User $user)
    {
        $user->bids()->save(new Bid($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /users/:username/bids/:id Get User Bid
     * @apiName UserBidsShow
     * @apiGroup UserGroup
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
    public function show(User $user, $bids)
    {
        $bids = $user->bids()->findOrFail($bids);

        return $this->respond(new Item($bids, new BidTransformer));
    }

    /**
     * @api {put} /users/:username/bids/:id Update User Bid
     * @apiName UserBidsUpdate
     * @apiGroup UserGroup
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
    public function update(Request $request, User $user, $bids)
    {
        $bids = $user->bids()->findOrFail($bids);

        $bids->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /users/:username/bids/:id Delete User Bid
     * @apiName UserBidsDelete
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
    public function destroy(User $user, $bids)
    {
        $bids = $user->bids()->findOrFail($bids);
        
        $bids->delete();

        return $this->respondDeleted();
    }
}