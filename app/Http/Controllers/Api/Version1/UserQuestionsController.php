<?php

namespace App\Http\Controllers\Api\Version1;

use App\User;
use App\Question;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\QuestionTransformer;

class UserQuestionsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->questions()->paginate();

        return $this->respondWithPagination($paginator, new QuestionTransformer);
    }

    /**
     * Store a newly created resource in storage.
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
     * Display the specified resource.
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
     * Update the specified resource in storage.
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
     * Remove the specified resource from storage.
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