<?php

namespace Viender\Userdata\Http\Controllers\Api\Version1;

use Viender\Userdata\City;
use Viender\Userdata\ZipCode;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Userdata\Transformers\Version1\ZipCodeTransformer;

class CityZipCodesController extends ApiController
{
    /** 
     * @api {get} /cities/:id/zipcodes Get City ZipCodes
     * @apiName CityZipCodesIndex
     * @apiGroup CityGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse ZipCodeIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(City $city)
    {
        $paginator = $city->zipCodes()->paginate();

        return $this->respondWithPagination($paginator, new ZipCodeTransformer);
    }

    /**
     * @api {post} /cities/:id/zipcodes Create City ZipCode
     * @apiName CityZipCodesStore
     * @apiGroup CityGroup
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
    public function store(Request $request, City $city)
    {
        $city->zipCodes()->save(new ZipCode($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /cities/:id/zipcodes/:id Get City ZipCode
     * @apiName CityZipCodesShow
     * @apiGroup CityGroup
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
    public function show(City $city, $zipCode)
    {
        $zipCode = $city->zipCodes()->findOrFail($zipCode);

        return $this->respond(new Item($zipCode, new ZipCodeTransformer));
    }

    /**
     * @api {put} /cities/:id/zipcodes/:id Update City ZipCode
     * @apiName CityZipCodesUpdate
     * @apiGroup CityGroup
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
    public function update(Request $request, City $city, $zipCode)
    {
        $zipCode = $city->zipCodes()->findOrFail($zipCode);

        $zipCode->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /cities/:id/zipcodes/:id Delete City ZipCode
     * @apiName CityZipCodesDelete
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
    public function destroy(City $city, $zipCode)
    {
        $zipCode = $city->zipCodes()->findOrFail($zipCode);
        
        $zipCode->delete();

        return $this->respondDeleted();
    }
}