<?php

namespace Viender\Ideapool\Http\Controllers\Api\Version1;

use Viender\Ideapool\City;
use Illuminate\Http\Request;
use Viender\Ideapool\Transformers\Version1\CityTransformer;
use Viender\Ideapool\Http\Controllers\Api\Version1\Handlers\BasicHandler;

class CitiesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, City::class, CityTransformer::class);
    }

    /** 
     * @api {get} /cities Get Cities
     * @apiName CitiesIndex
     * @apiGroup CityGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse CityIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /cities Create City
     * @apiName CitiesStore
     * @apiGroup CityGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse CityRequestBodyParam
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
     * @api {get} /cities/:id Get City
     * @apiName CitiesShow
     * @apiGroup CityGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse CityShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(City $city)
    {
        return $this->handler->show($city);
    }

    /**
     * @api {put} /cities/:id Update City
     * @apiName CitiesUpdate
     * @apiGroup CityGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse CityRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, City $city)
    {
        return $this->handler->update($request, $city);
    }

    /**
     * @api {delete} /cities/:id Delete City
     * @apiName CitiesDelete
     * @apiGroup CityGroup
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
    public function destroy(City $city)
    {
        return $this->handler->destroy($city);
    }
}