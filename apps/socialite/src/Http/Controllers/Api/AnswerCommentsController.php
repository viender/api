<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Comment;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Events\CommentableCommented;
use Viender\Socialite\Repositories\CommentsRepository;
use Viender\Socialite\Transformers\CommentTransformer;

class AnswerCommentsController extends ApiController
{
    private $comments;

    public function __construct(CommentsRepository $comments)
    {
        parent::__construct();
        $this->comments = $comments;
    }

    /**
     * @api {get} /answers/:id/comments Get Answer Comments
     * @apiName AnswerCommentsIndex
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiUse CommentIndexSuccess
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Answer $answer)
    {
        $paginator = $answer->comments()->orderBy('created_at', 'desc')->paginate();

        return $this->respondWithPagination($paginator, new CommentTransformer);
    }

    /**
     * @api {post} /answers/:id/comments Create Answer Comment
     * @apiName AnswerCommentsStore
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiUse CommentRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     *
     * @apiSuccess {String} message Response message
     * @apiSuccess {Number} status_code Response status code
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Answer $answer)
    {
        $comment = $this->comments->createByUser(\Auth::user()->id, $answer, $request->all());

        event(new CommentableCommented($answer));

        return $this->respond(new Item($comment, new CommentTransformer));
    }

    /**
     * @api {get} /answers/:id/comments/:id Get Answer Comment
     * @apiName AnswerCommentsShow
     * @apiGroup AnswerGroup
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
    public function show(Answer $answer, $comment)
    {
        $comment = $answer->comments()->findOrFail($comment);

        return $this->respond(new Item($comment, new CommentTransformer));
    }

    /**
     * @api {put} /answers/:id/comments/:id Update Answer Comment
     * @apiName AnswerCommentsUpdate
     * @apiGroup AnswerGroup
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
    public function update(Request $request, Answer $answer, $comment)
    {
        $comment = $answer->comments()->findOrFail($comment);

        $comment->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /answers/:id/comments/:id Delete Answer Comment
     * @apiName AnswerCommentsDelete
     * @apiGroup AnswerGroup
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
    public function destroy(Answer $answer, $comment)
    {
        $comment = $answer->comments()->findOrFail($comment);

        $comment->delete();

        return $this->respondDeleted();
    }
}
