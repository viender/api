<?php

namespace App\Http\Controllers\Api\Version1;

use App\User;
use App\Tag;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\TagTransformer;

class UserTagsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->tags()->paginate();

        return $this->respondWithPagination($paginator, new TagTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        if( ! $user->tags()->find($request->tag_id)) {
            $user->tags()->attach(Tag::findOrFail($request->tag_id));
        }

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, $tag)
    {
        $tag = $user->tags()->findOrFail($tag);

        return $this->respond(new Item($tag, new TagTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, $tag)
    {
        $tag = $user->tags()->findOrFail($tag);

        $tag->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, $tag)
    {
        $user->tags()->detach($user->tags()->findOrFail($tag));

        return $this->respondDeleted();
    }
}