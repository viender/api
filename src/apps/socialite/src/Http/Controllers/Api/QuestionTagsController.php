<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Viender\Socialite\Models\Question;
use Viender\Socialite\Models\Tag;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Socialite\Transformers\TagTransformer;

class QuestionTagsController extends ApiController
{
    /** 
     * @api {get} /questions/:slug/tags Get Question Tags
     * @apiName QuestinTagsIndex
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse TagIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Question $question)
    {
        $paginator = $question->tags()->paginate();

        return $this->respondWithPagination($paginator, new TagTransformer);
    }

    /**
     * @api {post} /questions/:slug/tags Create Question Tag
     * @apiName QuestinTagsStore
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse TagRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Question $question)
    {
        if( ! $question->tags()->find($request->tag_id)) {
            $question->tags()->attach(Tag::findOrFail($request->tag_id));
        }

        return $this->respondCreated();
    }

    /**
     * @api {get} /questions/:slug/tags/:id Get Question Tag
     * @apiName QuestinTagsShow
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse TagShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question, $tag)
    {
        $tag = $question->tags()->findOrFail($tag);

        return $this->respond(new Item($tag, new TagTransformer));
    }

    /**
     * @api {put} /questions/:slug/tags/:id Update Question Tag
     * @apiName QuestinTagsUpdate
     * @apiGroup QuestionGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse TagRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question, $tag)
    {
        $tag = $question->tags()->findOrFail($tag);

        $tag->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /questions/:slug/tags/:id Delete Question Tag
     * @apiName QuestinTagsDelete
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
    public function destroy(Question $question, $tag)
    {
        $auction->tags()->detach($auction->tags()->findOrFail($tag));

        return $this->respondDeleted();
    }
}