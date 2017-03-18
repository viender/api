<?php

namespace Viender\Address\Http\Controllers\Api;

use App\User;
use Viender\Address\Models\Address;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Address\Transformers\AddressTransformer;

class UserAddressesController extends ApiController
{
    /** 
     * @api {get} /users/:username/addresses Get User Addresses
     * @apiName UserAddressesIndex
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse AddressIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->addresses()->paginate();

        return $this->respondWithPagination($paginator, new AddressTransformer);
    }

    /**
     * @api {post} /users/:username/addresses Create User Address
     * @apiName UserAddressesStore
     * @apiGroup UserGroup
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
    public function store(Request $request, User $user)
    {
        $user->addresses()->save(new Address($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /users/:username/addresses/:id Get User Address
     * @apiName UserAddressesShow
     * @apiGroup UserGroup
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
    public function show(User $user, $address)
    {
        $address = $user->addresses()->findOrFail($address);

        return $this->respond(new Item($address, new AddressTransformer));
    }

    /**
     * @api {put} /users/:username/addresses/:id Update User Address
     * @apiName UserAddressesUpdate
     * @apiGroup UserGroup
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
    public function update(Request $request, User $user, $address)
    {
        $address = $user->addresses()->findOrFail($address);

        $address->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /users/:username/addresses/:id Delete User Address
     * @apiName UserAddressesDelete
     * @apiGroup UserGroup
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
    public function destroy(User $user, $address)
    {
        $address = $user->addresses()->findOrFail($address);
        
        $address->delete();

        return $this->respondDeleted();
    }
}