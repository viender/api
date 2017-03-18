<?php

namespace Viender\Address\Http\Controllers\Api;

use Viender\Address\Models\Country;
use Illuminate\Http\Request;
use Viender\Address\Transformers\CountryTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;

class CountriesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Country::class, CountryTransformer::class);
    }

    /** 
     * @api {get} /countries Get Countries
     * @apiName CountriesIndex
     * @apiGroup CountryGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse CountryIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /countries Create Country
     * @apiName CountriesStore
     * @apiGroup CountryGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse CountryRequestBodyParam
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
     * @api {get} /countries/:id Get Country
     * @apiName CountriesShow
     * @apiGroup CountryGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse CountryShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Country $country)
    {
        return $this->handler->show($country);
    }

    /**
     * @api {put} /countries/:id Update Country
     * @apiName CountriesUpdate
     * @apiGroup CountryGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse CountryRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Country $country)
    {
        return $this->handler->update($request, $country);
    }

    /**
     * @api {delete} /countries/:id Delete Country
     * @apiName CountriesDelete
     * @apiGroup CountryGroup
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
    public function destroy(Country $country)
    {
        return $this->handler->destroy($country);
    }
}