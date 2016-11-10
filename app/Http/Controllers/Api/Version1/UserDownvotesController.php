<?php

namespace App\Http\Controllers\Api\Version1;

use App\User;
use App\Downvote;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\DownvoteTransformer;

class UserDownvotesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->downvotes()->paginate();

        return $this->respondWithPagination($paginator, new DownvoteTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $user->downvotes()->save(new Downvote($request->all()));

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, $downvote)
    {
        $downvote = $user->downvotes()->findOrFail($downvote);

        return $this->respond(new Item($downvote, new DownvoteTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, $downvote)
    {
        $downvote = $user->downvotes()->findOrFail($downvote);

        $downvote->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, $downvote)
    {
        $downvote = $user->downvotes()->findOrFail($downvote);
        
        $downvote->delete();

        return $this->respondDeleted();
    }
}