<?php

namespace App\Http\Controllers\Api\Version1;

use App\ZipCode;
use App\Address;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\AddressTransformer;

class ZipCodeAddressesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ZipCode $zipcode)
    {
        $paginator = $zipcode->addresses()->paginate();

        return $this->respondWithPagination($paginator, new AddressTransformer);
    }

    /**
     * Store a newly created resource in storage.
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
     * Display the specified resource.
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
     * Update the specified resource in storage.
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
     * Remove the specified resource from storage.
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