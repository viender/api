<?php

namespace Viender\Mytutor\Http\Controllers\Api;

use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Mytutor\Models\Tutoring;
use Viender\Mytutor\Http\Requests\StoreTutoring;
use Viender\Mytutor\Repositories\TutoringsRepository;
use Viender\Mytutor\Transformers\TutoringTransformer;

class TutoringsController extends ApiController
{
    private $tutorings;

    public function __construct(TutoringsRepository $tutorings)
    {
        parent::__construct();
        $this->tutorings = $tutorings;
    }

    /** 
     * @api {get} /answers/:id/downvotes Get Answer Downvotes
     * @apiName AnswerDownvotesIndex
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiUse DownvoteIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paginator = $this->tutorings->paginate(15);

        return $this->respondWithPagination($paginator, new TutoringTransformer);
    }

    public function create()
    {        
        return view('viender.mytutor.postTutoring::index');
    }

    /**
     * @api {post} /answers/:id/downvotes Create Answer Downvote
     * @apiName AnswerDownvotesStore
     * @apiGroup AnswerGroup
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
    public function store(StoreTutoring $request)
    {
        $this->authorize('create', Tutoring::class);

        $tutoring = $this->tutorings->create($request->all());

        if ($request->expectsJson()) {
            return $this->respond(new Item($tutoring, new TutoringTransformer));
        }

        return redirect(route('web.viender.mytutor.tutorings.index'));
    }

    /**
     * @api {get} /answers/:id/downvotes/:id Get Answer Downvote
     * @apiName AnswerDownvotesShow
     * @apiGroup AnswerGroup
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
    public function show(Request $request, Tutoring $tutoring)
    {
        if ($request->expectsJson()) {
            return $this->respond(new Item($tutoring, new TutoringTransformer));
        }
        
        return view('viender.mytutor.showTutoring::index')->with(compact('tutoring'));
    }

    /**
     * @api {put} /answers/:id/downvotes/:id Update Answer Downvote
     * @apiName AnswerDownvotesUpdate
     * @apiGroup AnswerGroup
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
    public function update(Request $request, Tutoring $tutoring)
    {
        $downvote = $answer->downvotes()->findOrFail($downvote);

        $downvote->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /answers/:id/downvotes/:id Delete Answer Downvote
     * @apiName AnswerDownvotesDelete
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
    public function destroy(Tutoring $tutoring)
    {
        $downvote = $answer->downvotes()->findOrFail($downvote);
        
        $downvote->delete();

        return $this->respondDeleted();
    }
}