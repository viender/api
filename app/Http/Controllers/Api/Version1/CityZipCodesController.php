<?php

namespace App\Http\Controllers\Api\Version1;

use App\City;
use App\ZipCode;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\ZipCodeTransformer;

class CityZipCodesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(City $city)
    {
        $paginator = $city->zipCodes()->paginate();

        return $this->respondWithPagination($paginator, new ZipCodeTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, City $city)
    {
        $city->zipCodes()->save(new ZipCode($request->all()));

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(City $city, $zipCodes)
    {
        $zipCodes = $city->zipCodes()->findOrFail($zipCodes);

        return $this->respond(new Item($zipCodes, new ZipCodeTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, City $city, $zipCodes)
    {
        $zipCodes = $city->zipCodes()->findOrFail($zipCodes);

        $zipCodes->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(City $city, $zipCodes)
    {
        $zipCodes = $city->zipCodes()->findOrFail($zipCodes);
        
        $zipCodes->delete();

        return $this->respondDeleted();
    }
}