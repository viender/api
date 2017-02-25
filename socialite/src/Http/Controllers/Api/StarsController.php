<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Viender\Socialite\Star;
use Illuminate\Http\Request;
use Viender\Socialite\Transformers\StarTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;

class StarsController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Star::class, StarTransformer::class);
    }

    /** 
     * @api {get} /stars Get Stars
     * @apiName StarsIndex
     * @apiGroup StarGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse StarIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /stars Create Star
     * @apiName StarsStore
     * @apiGroup StarGroup
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
    public function store(Request $request)
    {
        return $this->handler->store($request);
    }

    /**
     * @api {get} /stars/:id Get Star
     * @apiName StarsShow
     * @apiGroup StarGroup
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
    public function show(Star $star)
    {
        return $this->handler->show($star);
    }

    /**
     * @api {put} /stars/:id Update Star
     * @apiName StarsUpdate
     * @apiGroup StarGroup
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
    public function update(Request $request, Star $star)
    {
        return $this->handler->update($request, $star);
    }

    /**
     * @api {delete} /stars/:id Delete Star
     * @apiName StarsDelete
     * @apiGroup StarGroup
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
    public function destroy(Star $star)
    {
        return $this->handler->destroy($star);
    }
}