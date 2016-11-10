<?php

namespace App\Http\Controllers\Api\Version1;

use App\Tag;
use App\User;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\UserTransformer;

class TagUsersController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Tag $tag)
    {
        $paginator = $tag->users()->paginate();

        return $this->respondWithPagination($paginator, new UserTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Tag $tag)
    {
        $tag->users()->save(new User($request->all()));

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag, $user)
    {
        $user = $tag->users()->findOrFail($user);

        return $this->respond(new Item($user, new UserTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tag $tag, $user)
    {
        $user = $tag->users()->findOrFail($user);

        $user->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tag $tag, $user)
    {
        $user = $tag->users()->findOrFail($user);
        
        $user->delete();

        return $this->respondDeleted();
    }
}