<?php

namespace Viender\Ideapool\Http\Controllers\Api\Version1;

use Viender\Userdata\State;
use Viender\Userdata\City;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Ideapool\Transformers\Version1\CityTransformer;

class StateCitiesController extends ApiController
{
    /** 
     * @api {get} /states/:id/cities Get State Cities
     * @apiName StateCitiesIndex
     * @apiGroup StateGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse CityIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(State $state)
    {
        $paginator = $state->cities()->paginate();

        return $this->respondWithPagination($paginator, new CityTransformer);
    }

    /**
     * @api {post} /states/:id/cities Create State Cities
     * @apiName StateCitiesStore
     * @apiGroup StateGroup
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
    public function store(Request $request, State $state)
    {
        $state->cities()->save(new City($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /states/:id/cities/:id Get State Cities
     * @apiName StateCitiesShow
     * @apiGroup StateGroup
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
    public function show(State $state, $city)
    {
        $city = $state->cities()->findOrFail($city);

        return $this->respond(new Item($city, new CityTransformer));
    }

    /**
     * @api {put} /states/:id/cities/:id Update State Cities
     * @apiName StateCitiesUpdate
     * @apiGroup StateGroup
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
    public function update(Request $request, State $state, $city)
    {
        $city = $state->cities()->findOrFail($city);

        $city->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /states/:id/cities/:id Delete State Cities
     * @apiName StateCitiesDelete
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
    public function destroy(State $state, $city)
    {
        $city = $state->cities()->findOrFail($city);
        
        $city->delete();

        return $this->respondDeleted();
    }
}