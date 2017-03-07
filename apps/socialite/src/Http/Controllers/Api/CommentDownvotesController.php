<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Illuminate\Http\Request;
use Viender\Ideapool\Downvote;
use League\Fractal\Resource\Item;
use Viender\Socialite\Models\Comment;
use Viender\Socialite\Repositories\DownvotesRepository;
use Viender\Socialite\Transformers\DownvoteTransformer;

class CommentDownvotesController extends ApiController
{
    protected $downvotes;

    public function __construct(DownvotesRepository $downvotes)
    {
        parent::__construct();
        $this->downvotes = $downvotes;
    }
    
    /** 
     * @api {get} /comments/:id/downvotes Get Comment Downvotes
     * @apiName CommentDownvotesIndex
     * @apiGroup CommentGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse DownvoteIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Comment $comment)
    {
        $paginator = $comment->downvotes()->paginate();

        return $this->respondWithPagination($paginator, new DownvoteTransformer);
    }

    /**
     * @api {post} /comments/:id/downvotes Create Comment Downvote
     * @apiName CommentDownvotesStore
     * @apiGroup CommentGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse DownvoteRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Comment $comment)
    {
        if($upvote = $this->downvotes->toggle($comment)) {
            return $this->respondCreated('Downvoted');
        }

        return $this->respondDeleted('Downvote removed');
    }

    /**
     * @api {get} /comments/:id/downvotes/:id Get Comment Downvote
     * @apiName CommentDownvotesShow
     * @apiGroup CommentGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse DownvoteShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment, $downvote)
    {
        $downvote = $comment->downvotes()->findOrFail($downvote);

        return $this->respond(new Item($downvote, new DownvoteTransformer));
    }

    /**
     * @api {put} /comments/:id/downvotes/:id Update Comment Downvote
     * @apiName CommentDownvotesUpdate
     * @apiGroup CommentGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse DownvoteRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment, $downvote)
    {
        $downvote = $comment->downvotes()->findOrFail($downvote);

        $downvote->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /comments/:id/downvotes/:id Delete Comment Downvote
     * @apiName CommentDownvotesDelete
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
    public function destroy(Comment $comment, $downvote)
    {
        $downvote = $comment->downvotes()->findOrFail($downvote);
        
        $downvote->delete();

        return $this->respondDeleted();
    }
}