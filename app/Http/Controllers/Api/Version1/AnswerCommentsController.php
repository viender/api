<?php

namespace App\Http\Controllers\Api\Version1;

use App\Answer;
use App\Comment;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\CommentTransformer;

class AnswerCommentsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Answer $answer)
    {
        $paginator = $answer->comments()->paginate();
        return $this->respondWithPagination($paginator, new CommentTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Answer $answer)
    {
        $answer->comments()->save(new Comment($request->all()));
        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Answer $answer, $comment)
    {
        $comment = $answer->comments()->findOrFail($comment);
        return $this->respond(new Item($comment, new CommentTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Answer $answer, $comment)
    {
        $comment = $answer->comments()->findOrFail($comment);
        $comment->update($request->all());
        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Answer $answer, $comment)
    {
        $comment = $answer->comments()->findOrFail($comment);
        $comment->delete();
        return $this->respondDeleted();
    }
}