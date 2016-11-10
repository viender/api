<?php

namespace App\Http\Controllers\Api\Version1;

use App\Country;
use App\State;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\StateTransformer;

class CountryStatesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Country $country)
    {
        $paginator = $country->states()->paginate();

        return $this->respondWithPagination($paginator, new StateTransformer);
    }

    /**
     * Store a newly created resource in storage.
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
     * Display the specified resource.
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
     * Update the specified resource in storage.
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
     * Remove the specified resource from storage.
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