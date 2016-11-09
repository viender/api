<?php

namespace App\Http\Controllers\Api\Version1;

use App\Auction;
use Illuminate\Http\Request;
use App\Viender\Transformers\Version1\AuctionTransformer;
use App\Http\Controllers\Api\Version1\Handlers\BasicHandler;

class CitiesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Auction::class, AuctionTransformer::class);
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
    public function show(Auction $auction)
    {
        return $this->handler->show($auction);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Auction $auction)
    {
        return $this->handler->update($request, $auction);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Auction $auction)
    {
        return $this->handler->destroy($auction);
    }
}