<?php

namespace App\Http\Controllers\Api\Version1;

use App\User;
use App\Upvote;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\UpvoteTransformer;

class UserUpvotesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->upvotes()->paginate();

        return $this->respondWithPagination($paginator, new UpvoteTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $user->upvotes()->save(new Upvote($request->all()));

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, $upvote)
    {
        $upvote = $user->upvotes()->findOrFail($upvote);

        return $this->respond(new Item($upvote, new UpvoteTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, $upvote)
    {
        $upvote = $user->upvotes()->findOrFail($upvote);

        $upvote->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, $upvote)
    {
        $upvote = $user->upvotes()->findOrFail($upvote);
        
        $upvote->delete();

        return $this->respondDeleted();
    }
}