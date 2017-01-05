<?php

namespace App\Ideapool\Http\Controllers\Api\Version1;

use App\User;
use App\Ideapool\Question;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Ideapool\Viender\Transformers\Version1\QuestionTransformer;

class UserQuestionsController extends ApiController
{
    /** 
     * @api {get} /users/:username/questions Get User Questions
     * @apiName UserQuestionsIndex
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse QuestionIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->questions()->paginate();

        return $this->respondWithPagination($paginator, new QuestionTransformer);
    }

    /**
     * @api {post} /users/:username/questions Create User Question
     * @apiName UserQuestionsStore
     * @apiGroup UserGroup
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
    public function store(Request $request, User $user)
    {
        $user->questions()->save(new Question($request->all()));

        return $this->respondCreated();
    }

    /**
     * @api {get} /users/:username/questions/:slug Get User Question
     * @apiName UserQuestionsShow
     * @apiGroup UserGroup
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
    public function show(User $user, $question)
    {
        $question = $user->questions()->findOrFail($question);

        return $this->respond(new Item($question, new QuestionTransformer));
    }

    /**
     * @api {put} /users/:username/questions/:slug Update User Question
     * @apiName UserQuestionsUpdate
     * @apiGroup UserGroup
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
    public function update(Request $request, User $user, $question)
    {
        $question = $user->questions()->findOrFail($question);

        $question->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /users/:username/questions/:slug Delete User Question
     * @apiName UserQuestionsDelete
     * @apiGroup UserGroup
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
    public function destroy(User $user, $question)
    {
        $question = $user->questions()->findOrFail($question);
        
        $question->delete();

        return $this->respondDeleted();
    }
}