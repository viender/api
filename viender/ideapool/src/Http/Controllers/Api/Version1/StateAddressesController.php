<?php

namespace Viender\Ideapool\Http\Controllers\Api\Version1;

use Viender\Ideapool\State;
use Viender\Ideapool\Address;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Ideapool\Transformers\Version1\AddressTransformer;

class StateAddressesController extends ApiController
{
    /** 
     * @api {get} /states/:id/addresses Get State Addresses
     * @apiName StateAddressesIndex
     * @apiGroup StateGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse AddressIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(State $state)
    {
        $paginator = $state->addresses()->paginate();

        return $this->respondWithPagination($paginator, new AddressTransformer);
    }

    /**
     * @api {post} /states/:id/addresses Create State Address
     * @apiName StateAddressesStore
     * @apiGroup StateGroup
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
    public function store(Request $request, State $state)
    {
        $state->addresses()->save(new Address($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /states/:id/addresses/:id Get State Address
     * @apiName StateAddressesShow
     * @apiGroup StateGroup
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
    public function show(State $state, $address)
    {
        $address = $state->addresses()->findOrFail($address);

        return $this->respond(new Item($address, new AddressTransformer));
    }

    /**
     * @api {put} /states/:id/addresses/:id Update State Address
     * @apiName StateAddressesUpdate
     * @apiGroup StateGroup
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
    public function update(Request $request, State $state, $address)
    {
        $address = $state->addresses()->findOrFail($address);

        $address->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /states/:id/addresses/:id Delete State Address
     * @apiName StateAddressesDelete
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
    public function destroy(State $state, $address)
    {
        $address = $state->addresses()->findOrFail($address);
        
        $address->delete();

        return $this->respondDeleted();
    }
}