<?php

namespace Viender\Ideapool\Http\Controllers\Api\Version1;

use Viender\Ideapool\ZipCode;
use Illuminate\Http\Request;
use Viender\Ideapool\Transformers\Version1\ZipCodeTransformer;
use Viender\Ideapool\Http\Controllers\Api\Version1\Handlers\BasicHandler;

class ZipCodesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, ZipCode::class, ZipCodeTransformer::class);
    }

    /** 
     * @api {get} /zipcodes Get ZipCodes
     * @apiName ZipCodesIndex
     * @apiGroup ZipCodeGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse ZipCodeIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /zipcodes Create ZipCode
     * @apiName ZipCodesStore
     * @apiGroup ZipCodeGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse ZipCodeRequestBodyParam
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
     * @api {get} /zipcodes/:id Get ZipCode
     * @apiName ZipCodesShow
     * @apiGroup ZipCodeGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse ZipCodeShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ZipCode $zipCode)
    {
        return $this->handler->show($zipCode);
    }

    /**
     * @api {put} /zipcodes/:id Update ZipCode
     * @apiName ZipCodesUpdate
     * @apiGroup ZipCodeGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse ZipCodeRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ZipCode $zipCode)
    {
        return $this->handler->update($request, $zipCode);
    }

    /**
     * @api {delete} /zipcodes/:id Delete ZipCode
     * @apiName ZipCodesDelete
     * @apiGroup ZipCodeGroup
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
    public function destroy(ZipCode $zipCode)
    {
        return $this->handler->destroy($zipCode);
    }
}