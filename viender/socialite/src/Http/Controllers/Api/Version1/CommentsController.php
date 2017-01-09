<?php

namespace Viender\Socialite\Http\Controllers\Api\Version1;

use Viender\Socialite\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Viender\Socialite\Transformers\Version1\CommentTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;

class CommentsController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Comment::class, CommentTransformer::class);
    }

    /** 
     * @api {get} /comments Get Comments
     * @apiName CommentsIndex
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
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /comments Create Comment
     * @apiName CommentsStore
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
    public function store(Request $request)
    {
        return $this->handler->store($request);
    }

    /**
     * @api {get} /comments/:id Get Comment
     * @apiName CommentsShow
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
    public function show(Comment $comment)
    {
        return $this->handler->show($comment);
    }

    /**
     * @api {put} /comments/:id Update Comment
     * @apiName CommentsUpdate
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
    public function update(Request $request, Comment $comment)
    {
        dd(Auth::user());
        return $this->handler->update($request, $comment);
    }

    /**
     * @api {delete} /comments/:id Delete Comment
     * @apiName CommentsDelete
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
    public function destroy(Comment $comment)
    {
        return $this->handler->destroy($comment);
    }
}