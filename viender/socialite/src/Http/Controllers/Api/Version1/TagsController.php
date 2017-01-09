<?php

namespace Viender\Socialite\Http\Controllers\Api\Version1;

use Viender\Socialite\Tag;
use Illuminate\Http\Request;
use Viender\Socialite\Transformers\Version1\TagTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;

class TagsController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Tag::class, TagTransformer::class);
    }

    /** 
     * @api {get} /tags Get Tags
     * @apiName TagsIndex
     * @apiGroup TagGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse TagIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /tags Create Tag
     * @apiName TagsStore
     * @apiGroup TagGroup
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
    public function store(Request $request)
    {
        return $this->handler->store($request);
    }

    /**
     * @api {get} /tags/:id Get Tag
     * @apiName TagsShow
     * @apiGroup TagGroup
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
    public function show(Tag $tag)
    {
        return $this->handler->show($tag);
    }

    /**
     * @api {put} /tags/:id Update Tag
     * @apiName TagsUpdate
     * @apiGroup TagGroup
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
    public function update(Request $request, Tag $tag)
    {
        return $this->handler->update($request, $tag);
    }

    /**
     * @api {delete} /tags/:id Delete Tag
     * @apiName TagsDelete
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
    public function destroy(Tag $tag)
    {
        return $this->handler->destroy($tag);
    }
}