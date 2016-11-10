<?php

namespace App\Http\Controllers\Api\Version1;

use App\Comment;
use App\Upvote;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\UpvoteTransformer;

class CommentUpvotesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Comment $comment)
    {
        $paginator = $comment->upvotes()->paginate();

        return $this->respondWithPagination($paginator, new UpvoteTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Comment $comment)
    {
        $comment->upvotes()->save(new Upvote($request->all()));

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment, $upvote)
    {
        $upvote = $comment->upvotes()->findOrFail($upvote);

        return $this->respond(new Item($upvote, new UpvoteTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment, $upvote)
    {
        $upvote = $comment->upvotes()->findOrFail($upvote);

        $upvote->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment, $upvote)
    {
        $upvote = $comment->upvotes()->findOrFail($upvote);
        
        $upvote->delete();

        return $this->respondDeleted();
    }
}