<?php

namespace App\Http\Controllers\Api\Version1;

use App\Comment;
use App\Question;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Repositories\CommentsRepository;
use App\Viender\Transformers\Version1\CommentTransformer;

class QuestionCommentsController extends ApiController
{
    private $comments;

    public function __construct(CommentsRepository $comments)
    {
        parent::__construct();
        $this->comments = $comments;
    }

    /** 
     * @api {get} /questions/:slug/comments Get Question Comments
     * @apiName QuestionCommentsIndex
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse CommentIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Question $question)
    {
        $paginator = $question->comments()->paginate();

        return $this->respondWithPagination($paginator, new CommentTransformer);
    }

    /**
     * @api {post} /questions/:slug/comments Create Question Comment
     * @apiName QuestionCommentsStore
     * @apiGroup QuestionGroup
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
    public function store(Request $request, Question $question)
    {
        $comment = $this->comments->createByUser(\Auth::user()->id, $question, $request->all());

        return $this->respond(new Item($comment, new CommentTransformer));
    }

    /**
     * @api {get} /questions/:slug/comments/:id Get Question Comment
     * @apiName QuestionCommentsShow
     * @apiGroup QuestionGroup
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
    public function show(Question $question, $comment)
    {
        $comment = $question->comments()->findOrFail($comment);

        return $this->respond(new Item($comment, new CommentTransformer));
    }

    /**
     * @api {put} /questions/:slug/comments/:id Update Question Comment
     * @apiName QuestionCommentsUpdate
     * @apiGroup QuestionGroup
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
    public function update(Request $request, Question $question, $comment)
    {
        $comment = $question->comments()->findOrFail($comment);

        $comment->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /questions/:slug/comments/:id Delete Question Comment
     * @apiName QuestionCommentsDelete
     * @apiGroup QuestionGroup
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
    public function destroy(Question $question, $comment)
    {
        $comment = $question->comments()->findOrFail($comment);
        
        $comment->delete();

        return $this->respondDeleted();
    }
}