<?php

namespace Viender\Userdata\Http\Controllers\Api\Version1;

use Viender\Userdata\Address;
use Illuminate\Http\Request;
use Viender\Userdata\Transformers\Version1\AddressTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;

class AddressesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Address::class, AddressTransformer::class);
    }

    /** 
     * @api {get} /addresses Get Addresses
     * @apiName AddressIndex
     * @apiGroup AddressGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiUse AddressIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /addresses Create Address
     * @apiName AddressStore
     * @apiGroup AddressGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse AddressRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Address::createWithStreet($request->all());
        return $this->respondCreated();
    }

    /**
     * @api {get} /addresses/:id Get Address by ID
     * @apiName AddressShow
     * @apiGroup AddressGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse AddressShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Address $address)
    {
        return $this->handler->show($address);
    }

    /**
     * @api {put} /addresses/:id Update Address
     * @apiName AddressUpdate
     * @apiGroup AddressGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse AddressRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Address $address)
    {
        return $this->handler->update($request, $address);
    }

    /**
     * @api {delete} /addresses/:id Delete Address
     * @apiName AddressDelete
     * @apiGroup AddressGroup
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
    public function destroy(Address $address)
    {
        return $this->handler->destroy($address);
    }
}