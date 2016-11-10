<?php

namespace App\Http\Controllers\Api\Version1;

use App\Street;
use Illuminate\Http\Request;
use App\Viender\Transformers\Version1\StreetTransformer;
use App\Http\Controllers\Api\Version1\Handlers\BasicHandler;

class ZipCodesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Street::class, StreetTransformer::class);
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
    public function show(Street $street)
    {
        return $this->handler->show($street);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Street $street)
    {
        return $this->handler->update($request, $street);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Street $street)
    {
        return $this->handler->destroy($street);
    }
}