<?php

namespace App\Http\Controllers\Api\Version1;

use App\State;
use App\City;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\CityTransformer;

class StateCitiesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(State $state)
    {
        $paginator = $state->cities()->paginate();

        return $this->respondWithPagination($paginator, new CityTransformer);
    }

    /**
     * Store a newly created resource in storage.
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
     * Display the specified resource.
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
     * Update the specified resource in storage.
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
     * Remove the specified resource from storage.
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