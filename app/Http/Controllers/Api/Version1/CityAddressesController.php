<?php

namespace App\Http\Controllers\Api\Version1;

use App\City;
use App\Address;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\AddressTransformer;

class CityAddressesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(City $city)
    {
        $paginator = $city->addresses()->paginate();
        return $this->respondWithPagination($paginator, new AddressTransformer);
    }

    /**
     * Store a newly created resource in storage.
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
     * Display the specified resource.
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
     * Update the specified resource in storage.
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
     * Remove the specified resource from storage.
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