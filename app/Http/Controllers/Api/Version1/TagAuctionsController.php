<?php

namespace App\Http\Controllers\Api\Version1;

use App\Tag;
use App\Auction;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\AuctionTransformer;

class TagAuctionsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Tag $tag)
    {
        $paginator = $tag->auctions()->paginate();

        return $this->respondWithPagination($paginator, new AuctionTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Tag $tag)
    {
        $tag->auctions()->save(new Auction($request->all()));

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag, $auction)
    {
        $auction = $tag->auctions()->findOrFail($auction);

        return $this->respond(new Item($auction, new AuctionTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tag $tag, $auction)
    {
        $auction = $tag->auctions()->findOrFail($auction);

        $auction->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tag $tag, $auction)
    {
        $auction = $tag->auctions()->findOrFail($auction);
        
        $auction->delete();

        return $this->respondDeleted();
    }
}