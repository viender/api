<?php

namespace App\Http\Controllers\Api\Version1;

use App\ZipCode;
use Illuminate\Http\Request;
use App\Viender\Transformers\Version1\ZipCodeTransformer;
use App\Http\Controllers\Api\Version1\Handlers\BasicHandler;

class ZipCodesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, ZipCode::class, ZipCodeTransformer::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->handler->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ZipCode $zipCode)
    {
        return $this->handler->show($zipCode);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ZipCode $zipCode)
    {
        return $this->handler->update($request, $zipCode);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ZipCode $zipCode)
    {
        return $this->handler->destroy($zipCode);
    }
}