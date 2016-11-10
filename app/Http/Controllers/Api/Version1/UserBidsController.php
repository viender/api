<?php

namespace App\Http\Controllers\Api\Version1;

use App\User;
use App\Bid;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\BidTransformer;

class UserBidsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->bids()->paginate();

        return $this->respondWithPagination($paginator, new BidTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $user->bids()->save(new Bid($request->all()));

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, $bids)
    {
        $bids = $user->bids()->findOrFail($bids);

        return $this->respond(new Item($bids, new BidTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, $bids)
    {
        $bids = $user->bids()->findOrFail($bids);

        $bids->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, $bids)
    {
        $bids = $user->bids()->findOrFail($bids);
        
        $bids->delete();

        return $this->respondDeleted();
    }
}