<?php

namespace Viender\Profile\Http\Controllers\Api;

use Viender\Profile\City;
use Viender\Profile\Address;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Profile\Transformers\AddressTransformer;

class CityAddressesController extends ApiController
{
    /** 
     * @api {get} /cities/:id/addresses Get City Addresses
     * @apiName CityAddressesIndex
     * @apiGroup CityGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse AddressIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(City $city)
    {
        $paginator = $city->addresses()->paginate();

        return $this->respondWithPagination($paginator, new AddressTransformer);
    }

    /**
     * @api {post} /cities/:id/addresses Create City Address
     * @apiName CityAddressesStore
     * @apiGroup CityGroup
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
    public function store(Request $request, City $city)
    {
        $city->addresses()->save(new Address($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /cities/:id/addresses/:id Get City Address
     * @apiName CityAddressesShow
     * @apiGroup CityGroup
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
    public function show(City $city, $address)
    {
        $address = $city->addresses()->findOrFail($address);

        return $this->respond(new Item($address, new AddressTransformer));
    }

    /**
     * @api {put} /cities/:id/addresses/:id Update City Address
     * @apiName CityAddressesUpdate
     * @apiGroup CityGroup
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
    public function update(Request $request, City $city, $address)
    {
        $address = $city->addresses()->findOrFail($address);

        $address->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /cities/:id/addresses/:id Delete City Address
     * @apiName CityAddressesDelete
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
    public function destroy(City $city, $address)
    {
        $address = $city->addresses()->findOrFail($address);
        
        $address->delete();

        return $this->respondDeleted();
    }
}