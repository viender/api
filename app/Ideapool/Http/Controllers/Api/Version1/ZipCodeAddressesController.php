<?php

namespace App\Ideapool\Http\Controllers\Api\Version1;

use App\Ideapool\ZipCode;
use App\Ideapool\Address;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Ideapool\Viender\Transformers\Version1\AddressTransformer;

class ZipCodeAddressesController extends ApiController
{
    /** 
     * @api {get} /zipcodes/:id/addresses Get ZipCode Addresses
     * @apiName ZipCodeAddressesIndex
     * @apiGroup ZipCodeGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse AddressIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(ZipCode $zipcode)
    {
        $paginator = $zipcode->addresses()->paginate();

        return $this->respondWithPagination($paginator, new AddressTransformer);
    }

    /**
     * @api {post} /zipcodes/:id/addresses Create ZipCode Address
     * @apiName ZipCodeAddressesStore
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
    public function store(Request $request, ZipCode $zipcode)
    {
        $zipcode->addresses()->save(new Address($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /zipcodes/:id/addresses/:id Get ZipCode Address
     * @apiName ZipCodeAddressesShow
     * @apiGroup ZipCodeGroup
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
    public function show(ZipCode $zipcode, $address)
    {
        $address = $zipcode->addresses()->findOrFail($address);

        return $this->respond(new Item($address, new AddressTransformer));
    }

    /**
     * @api {put} /zipcodes/:id/addresses/:id Update ZipCode Address
     * @apiName ZipCodeAddressesUpdate
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
    public function update(Request $request, ZipCode $zipcode, $address)
    {
        $address = $zipcode->addresses()->findOrFail($address);

        $address->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /zipcodes/:id/addresses/:id Delete ZipCode Address
     * @apiName ZipCodeAddressesDelete
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
    public function destroy(ZipCode $zipcode, $address)
    {
        $address = $zipcode->addresses()->findOrFail($address);
        
        $address->delete();

        return $this->respondDeleted();
    }
}