<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Viender\Socialite\Models\Tag;
use App\User;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Transformers\UserTransformer;

class TagUsersController extends ApiController
{
    /** 
     * @api {get} /tags/:id/users Get Tag Users
     * @apiName TagUsersIndex
     * @apiGroup TagGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse UserIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Tag $tag)
    {
        $paginator = $tag->users()->paginate();

        return $this->respondWithPagination($paginator, new UserTransformer);
    }

    /**
     * @api {post} /tags/:id/users Create Tag User
     * @apiName TagUsersStore
     * @apiGroup TagGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse UserRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Tag $tag)
    {
        $tag->users()->save(new User($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /tags/:id/users/:username Get Tag User
     * @apiName TagUsersShow
     * @apiGroup TagGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse UserShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag, $user)
    {
        $user = $tag->users()->findOrFail($user);

        return $this->respond(new Item($user, new UserTransformer));
    }

    /**
     * @api {put} /tags/:id/users/:username Update Tag User
     * @apiName TagUsersUpdate
     * @apiGroup TagGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse UserRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tag $tag, $user)
    {
        $user = $tag->users()->findOrFail($user);

        $user->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /tags/:id/users/:username Delete Tag User
     * @apiName TagUsersDelete
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
    public function destroy(Tag $tag, $user)
    {
        $user = $tag->users()->findOrFail($user);
        
        $user->delete();

        return $this->respondDeleted();
    }
}