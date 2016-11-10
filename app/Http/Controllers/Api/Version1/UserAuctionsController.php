<?php

namespace App\Http\Controllers\Api\Version1;

use App\User;
use App\Auction;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\AuctionTransformer;

class UserAuctionsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->auctions()->paginate();

        return $this->respondWithPagination($paginator, new AuctionTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $user->auctions()->save(new Auction($request->all()));

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, $auction)
    {
        $auction = $user->auctions()->findOrFail($auction);

        return $this->respond(new Item($auction, new AuctionTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, $auction)
    {
        $auction = $user->auctions()->findOrFail($auction);

        $auction->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, $auction)
    {
        $auction = $user->auctions()->findOrFail($auction);
        
        $auction->delete();

        return $this->respondDeleted();
    }
}