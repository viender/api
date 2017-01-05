<?php

namespace App\Ideapool\Http\Controllers\Api\Version1;

use App\User;
use App\Ideapool\Star;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Ideapool\Viender\Transformers\Version1\StarTransformer;

class UserStarsController extends ApiController
{
    /** 
     * @api {get} /users/:username/stars Get User Stars
     * @apiName UserStarsIndex
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse StarIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->stared()->paginate();

        return $this->respondWithPagination($paginator, new StarTransformer);
    }

    /**
     * @api {post} /users/:username/stars Create User Star
     * @apiName UserStarsStore
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse StarRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $user->stared()->save(new Star($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /users/:username/stars/:id Get User Star
     * @apiName UserStarsShow
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse StarShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, $star)
    {
        $star = $user->stared()->findOrFail($star);

        return $this->respond(new Item($star, new StarTransformer));
    }

    /**
     * @api {put} /users/:username/stars/:id Update User Star
     * @apiName UserStarsUpdate
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse StarRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, $star)
    {
        $star = $user->stared()->findOrFail($star);

        $star->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /users/:username/stars/:id Delete User Star
     * @apiName UserStarsDelete
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
    public function destroy(User $user, $star)
    {
        $star = $user->stared()->findOrFail($star);
        
        $star->delete();

        return $this->respondDeleted();
    }
}