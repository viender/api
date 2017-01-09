<?php

namespace Viender\Socialite\Http\Controllers\Api\Version1;

use Viender\Socialite\Tag;
use Viender\Socialite\Question;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Transformers\Version1\QuestionTransformer;

class TagQuestionsController extends ApiController
{
    /** 
     * @api {get} /tags/:id/questions Get Tag Questions
     * @apiName TagQuestionsIndex
     * @apiGroup TagGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse QuestionIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Tag $tag)
    {
        $paginator = $tag->questions()->paginate();

        return $this->respondWithPagination($paginator, new QuestionTransformer);
    }

    /**
     * @api {post} /tags/:id/questions Create Tag Question
     * @apiName TagQuestionsStore
     * @apiGroup TagGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse QuestionRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Tag $tag)
    {
        $tag->questions()->save(new Question($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /tags/:id/questions/:slug Get Tag Question
     * @apiName TagQuestionsShow
     * @apiGroup TagGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse QuestionShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag, $question)
    {
        $question = $tag->questions()->findOrFail($question);

        return $this->respond(new Item($question, new QuestionTransformer));
    }

    /**
     * @api {put} /tags/:id/questions/:slug Update Tag Question
     * @apiName TagQuestionsUpdate
     * @apiGroup TagGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse QuestionRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tag $tag, $question)
    {
        $question = $tag->questions()->findOrFail($question);

        $question->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /tags/:id/questions/:slug Delete Tag Question
     * @apiName TagQuestionsDelete
     * @apiGroup TagGroup
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
    public function destroy(Tag $tag, $question)
    {
        $question = $tag->questions()->findOrFail($question);
        
        $question->delete();

        return $this->respondDeleted();
    }
}