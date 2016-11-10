<?php

namespace App\Http\Controllers\Api\Version1;

use App\User;
use App\Star;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\StarTransformer;

class UserStarsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->stared()->paginate();

        return $this->respondWithPagination($paginator, new StarTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $user->stared()->save(new Star($request->all()));

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, $star)
    {
        $star = $user->stared()->findOrFail($star);

        return $this->respond(new Item($star, new StarTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, $star)
    {
        $star = $user->stared()->findOrFail($star);

        $star->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, $star)
    {
        $star = $user->stared()->findOrFail($star);
        
        $star->delete();

        return $this->respondDeleted();
    }
}