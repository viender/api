<?php

namespace Viender\Raa;

use App\User;
use Viender\Topic\Models\Topic;
use Viender\Socialite\Models\Answer;
use Illuminate\Support\Facades\Route;
use Viender\Socialite\Models\Question;
use Viender\Topic\Models\CategoryTopic;
use Viender\Topic\Transformers\TopicTransformer;
use Viender\Address\Transformers\UserTransformer;
use Viender\Socialite\Transformers\AnswerTransformer;
use Viender\Socialite\Transformers\QuestionTransformer;
use Viender\Topic\Transformers\CategoryTopicTransformer;

class Raa
{
	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\Raa\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        });
	}

    public function smartSearch($searchQuery, $controller)
    {
        $topics = Topic::search($searchQuery)->paginate();

        if ($topics->count() > 0) {
            return $controller->respondWithPagination($topics, new TopicTransformer);
        }

        // $answers = Answer::search($searchQuery)->paginate();

        // if ($answers->count() > 0) {
        //     return $controller->respondWithPagination($answers, new AnswerPreviewTransformer($this->answers));
        // }

        $questions = Question::search($searchQuery)->paginate();

        if ($questions->count() > 0) {
            return $controller->respondWithPagination($questions, new QuestionTransformer());
        }

        return $controller->respondNotFound();
    }

    public function specificSearch($searchQuery, $searchableType, $controller, $input = [])
    {
        $response = $controller->respondNotFound();

        switch ($searchableType) {
            case 'question':
                $results = Question::search($searchQuery)->paginate();
                $response = $controller->respondWithPagination($results, new QuestionTransformer());
                break;

            case 'answer':
                $results = Answer::search($searchQuery)->paginate();
                $response = $controller->respondWithPagination($results, new AnswerTransformer());
                break;

            case 'topic':
                $results;
                $transformer;

                if (isset($input['category_id'])) {
                    $results = CategoryTopic::search($searchQuery)->where('category_id', $input['category_id'])->paginate();
                    $transformer = CategoryTopicTransformer::class;
                } else {
                    $results = Topic::search($searchQuery)->paginate();
                    $transformer = TopicTransformer::class;
                }
                $response = $controller->respondWithPagination($results, new $transformer);
                break;

            case 'user':
                $results = User::search($searchQuery)->paginate();
                $response = $controller->respondWithPagination($results, new UserTransformer());
                break;

            default:
                break;
        }

        return $response;
    }
}
