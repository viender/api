<?php

namespace App\Http\Controllers\Api\Version1;

use App\Auction;
use App\Bid;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\BidTransformer;

class AuctionBidsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Auction $auction)
    {
        $paginator = $auction->bids()->paginate();
        return $this->respondWithPagination($paginator, new BidTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Auction $auction)
    {
        $auction->bids()->save(new Bid($request->all()));
        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Auction $auction, $bid)
    {
        $bid = $auction->bids()->findOrFail($bid);
        return $this->respond(new Item($bid, new BidTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Auction $auction, $bid)
    {
        $bid = $auction->bids()->findOrFail($bid);
        $bid->update($request->all());
        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Auction $auction, $bid)
    {
        $bid = $auction->bids()->findOrFail($bid);
        $bid->delete();
        return $this->respondDeleted();
    }
}