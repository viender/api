<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Models\Comment;
use Viender\Socialite\Events\CommentableCommented;
use Viender\Socialite\Repositories\CommentsRepository;
use Viender\Socialite\Transformers\CommentTransformer;

class CommentCommentsController extends ApiController
{
    private $comments;

    public function __construct(CommentsRepository $comments)
    {
        parent::__construct();
        $this->comments = $comments;
    }

    /**
     * @api {get} /comments/:id/comments Get Comment Comments
     * @apiName CommentCommentsIndex
     * @apiGroup CommentGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiUse CommentIndexSuccess
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Comment $commentable)
    {
        $paginator = $commentable->comments()->orderBy('created_at', 'asc')->paginate();

        return $this->respondWithPagination($paginator, new CommentTransformer);
    }

    /**
     * @api {post} /comments/:id/comments Create Comment Comment
     * @apiName CommentCommentsStore
     * @apiGroup CommentGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiUse CommentRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Comment $commentable)
    {
        $comment = $this->comments->createByUser(\Auth::user()->id, $commentable, $request->all());

        event(new CommentableCommented($comment));

        return $this->respond(new Item($comment, new CommentTransformer));
        return $this->respondCreated();
    }

    /**
     * @api {get} /comments/:id/comments/:id Get Comment Comment
     * @apiName CommentCommentsShow
     * @apiGroup CommentGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse CommentShowSuccess
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $commentable, $comment)
    {
        $comment = $commentable->comments()->findOrFail($comment);

        return $this->respond(new Item($comment, new CommentTransformer));
    }

    /**
     * @api {put} /comments/:id/comments/:id Update Comment Comment
     * @apiName CommentCommentsUpdate
     * @apiGroup CommentGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse CommentRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $commentable, $comment)
    {
        $comment = $commentable->comments()->findOrFail($comment);

        $comment->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /comments/:id/comments/:id Delete Comment Comment
     * @apiName CommentCommentsDelete
     * @apiGroup CommentGroup
     * @apiVersion 1.0.0
     * @apiDescription Delete an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse MessageResponseSuccess
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $commentable, $comment)
    {
        $comment = $commentable->comments()->findOrFail($comment);

        $comment->delete();

        return $this->respondDeleted();
    }
}
