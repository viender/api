<?php

namespace App\Ideapool\Http\Controllers\Api\Version1;

use App\Ideapool\State;
use Illuminate\Http\Request;
use App\Ideapool\Viender\Transformers\Version1\StateTransformer;
use App\Ideapool\Http\Controllers\Api\Version1\Handlers\BasicHandler;

class StatesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, State::class, StateTransformer::class);
    }

    /** 
     * @api {get} /states Get States
     * @apiName StatesIndex
     * @apiGroup StateGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse StateIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /states Create State
     * @apiName StatesStore
     * @apiGroup StateGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse StateRequestBodyParam
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
     * @api {get} /states/:id Get State
     * @apiName StatesShow
     * @apiGroup StateGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse StateShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(State $state)
    {
        return $this->handler->show($state);
    }

    /**
     * @api {put} /states/:id Update State
     * @apiName StatesUpdate
     * @apiGroup StateGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse StateRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, State $state)
    {
        return $this->handler->update($request, $state);
    }

    /**
     * @api {delete} /states/:id Delete State
     * @apiName StatesDelete
     * @apiGroup StateGroup
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
    public function destroy(State $state)
    {
        return $this->handler->destroy($state);
    }
}