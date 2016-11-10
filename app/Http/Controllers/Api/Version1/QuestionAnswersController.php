<?php

namespace App\Http\Controllers\Api\Version1;

use App\Question;
use App\Answer;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use App\Viender\Transformers\Version1\AnswerTransformer;

class QuestionAnswersController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Question $question)
    {
        $paginator = $question->answers()->paginate();

        return $this->respondWithPagination($paginator, new AnswerTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Question $question)
    {
        $question->answers()->save(new Answer($request->all()));

        return $this->respondCreated();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question, $answer)
    {
        $answer = $question->answers()->findOrFail($answer);

        return $this->respond(new Item($answer, new AnswerTransformer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question, $answer)
    {
        $answer = $question->answers()->findOrFail($answer);

        $answer->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question, $answer)
    {
        $answer = $question->answers()->findOrFail($answer);
        
        $answer->delete();

        return $this->respondDeleted();
    }
}