<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Illuminate\Http\Request;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Repositories\AnswersRepository;
use Viender\Socialite\Transformers\AnswerTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;
use Viender\Socialite\Transformers\AnswerPreviewTransformer;

class AnswersController extends ApiController
{
    protected $answers;

    public function __construct(AnswersRepository $answers)
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Answer::class, AnswerTransformer::class);
        $this->answers = $answers;
    }

    /**
     * @api {get} /answers Get Answers
     * @apiName AnswersIndex
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiUse AnswerIndexSuccess
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $paginator = Answer::withCount('upvotes')->orderBy('upvotes_count', 'desc')->paginate($request->per_page ?? 15);
        $paginator = null;

        $params = [];

        if ($request->user_id) array_push($params, ['user_id', $request->user_id]);

        if ($request->sort) {
            switch ($request->sort) {
                case 'latest':
                    $paginator = Answer::where($params)->latest('created_at')->paginate($request->per_page ?? 15);
                    break;

                case 'popular':
                    $paginator = Answer::where($params)->withCount('upvotes')->orderBy('upvotes_count', 'desc')->paginate($request->per_page ?? 15);
                    break;

                default:
                    $paginator = Answer::where($params)->latest('created_at')->paginate($request->per_page ?? 15);
                    break;
            }
        } else {
            $paginator = Answer::where($params)->latest('created_at')->paginate($request->per_page ?? 15);
        }

        if ($request->user_id) $paginator->appends(['user_id' => $request->user_id]);

        return $this->respondWithPagination($paginator, new AnswerPreviewTransformer($this->answers));
    }

    /**
     * @api {post} /answers Create Answers
     * @apiName AnswersStore
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiUse AnswerRequestBodyParam
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
     * @api {get} /answers/:id Get Answer
     * @apiName AnswersShow
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse AnswerShowSuccess
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Answer $answer)
    {
        return $this->handler->show($answer);
    }

    /**
     * @api {put} /answers/:id Update Answer
     * @apiName AnswersUpdate
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse AnswerRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Answer $answer)
    {
        return $this->handler->update($request, $answer);
    }

    /**
     * @api {delete} /answers/:id Delete Answer
     * @apiName AnswersDelete
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
    public function destroy(Answer $answer)
    {
        return $this->handler->destroy($answer);
    }
}
