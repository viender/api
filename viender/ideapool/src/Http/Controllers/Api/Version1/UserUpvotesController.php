<?php

namespace Viender\Ideapool\Http\Controllers\Api\Version1;

use App\User;
use Viender\Ideapool\Upvote;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Ideapool\Transformers\Version1\UpvoteTransformer;

class UserUpvotesController extends ApiController
{
    /** 
     * @api {get} /users/:username/upvotes Get User Upvotes
     * @apiName UserUpvotesIndex
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse UpvoteIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->upvotes()->paginate();

        return $this->respondWithPagination($paginator, new UpvoteTransformer);
    }

    /**
     * @api {post} /users/:username/upvotes Create User Upvote
     * @apiName UserUpvotesStore
     * @apiGroup UserGroup
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
    public function store(Request $request, User $user)
    {
        $user->upvotes()->save(new Upvote($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /users/:username/upvotes/:id Get User Upvote
     * @apiName UserUpvotesShow
     * @apiGroup UserGroup
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
    public function show(User $user, $upvote)
    {
        $upvote = $user->upvotes()->findOrFail($upvote);

        return $this->respond(new Item($upvote, new UpvoteTransformer));
    }

    /**
     * @api {put} /users/:username/upvotes/:id Update User Upvote
     * @apiName UserUpvotesUpdate
     * @apiGroup UserGroup
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
    public function update(Request $request, User $user, $upvote)
    {
        $upvote = $user->upvotes()->findOrFail($upvote);

        $upvote->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /users/:username/upvotes/:id Delete User Upvote
     * @apiName UserUpvotesDelete
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
    public function destroy(User $user, $upvote)
    {
        $upvote = $user->upvotes()->findOrFail($upvote);
        
        $upvote->delete();

        return $this->respondDeleted();
    }
}