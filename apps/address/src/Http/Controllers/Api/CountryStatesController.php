<?php

namespace Viender\Address\Http\Controllers\Api;

use Viender\Address\Models\Country;
use Viender\Address\Models\State;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Address\Transformers\StateTransformer;

class CountryStatesController extends ApiController
{
    /** 
     * @api {get} /countries/:id/states Get Country States
     * @apiName countryStatesIndex
     * @apiGroup CountryGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse StateIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Country $country)
    {
        $paginator = $country->states()->paginate();

        return $this->respondWithPagination($paginator, new StateTransformer);
    }

    /**
     * @api {post} /countries/:id/states Create Cuntry State
     * @apiName countryStatesStore
     * @apiGroup CountryGroup
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
    public function store(Request $request, Country $country)
    {
        $country->states()->save(new State($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /countries/:id/states/:id Get Country State
     * @apiName countryStatesShow
     * @apiGroup CountryGroup
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
    public function show(Country $country, $state)
    {
        $state = $country->states()->findOrFail($state);

        return $this->respond(new Item($state, new StateTransformer));
    }

    /**
     * @api {put} /countries/:id/states/:id Update Country State
     * @apiName countryStatesUpdate
     * @apiGroup CountryGroup
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
    public function update(Request $request, Country $country, $state)
    {
        $state = $country->states()->findOrFail($state);

        $state->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /countries/:id/states/:id Delete Country State
     * @apiName countryStatesDelete
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
    public function destroy(Country $country, $state)
    {
        $state = $country->states()->findOrFail($state);
        
        $state->delete();

        return $this->respondDeleted();
    }
}