<?php

namespace Viender\Socialite\Http\Controllers\Api\Version1;

use App\User;
use Viender\Socialite\Tag;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Transformers\Version1\TagTransformer;

class UserTagsController extends ApiController
{
    /** 
     * @api {get} /users/:username/tags Get User Tags
     * @apiName UserTagsIndex
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse TagIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->tags()->paginate();

        return $this->respondWithPagination($paginator, new TagTransformer);
    }

    /**
     * @api {post} /users/:username/tags Create User Tag
     * @apiName UserTagsStore
     * @apiGroup UserGroup
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
    public function store(Request $request, User $user)
    {
        if( ! $user->tags()->find($request->tag_id)) {
            $user->tags()->attach(Tag::findOrFail($request->tag_id));
        }

        return $this->respondCreated();
    }

    /**
     * @api {get} /users/:username/tags/:id Get User Tag
     * @apiName UserTagsShow
     * @apiGroup UserGroup
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
    public function show(User $user, $tag)
    {
        $tag = $user->tags()->findOrFail($tag);

        return $this->respond(new Item($tag, new TagTransformer));
    }

    /**
     * @api {put} /users/:username/tags/:id Update User Tag
     * @apiName UserTagsUpdate
     * @apiGroup UserGroup
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
    public function update(Request $request, User $user, $tag)
    {
        $tag = $user->tags()->findOrFail($tag);

        $tag->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /users/:username/tags/:id Delete User Tag
     * @apiName UserTagsDelete
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
    public function destroy(User $user, $tag)
    {
        $user->tags()->detach($user->tags()->findOrFail($tag));

        return $this->respondDeleted();
    }
}