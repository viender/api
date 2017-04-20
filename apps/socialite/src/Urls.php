<?php

namespace Viender\Socialite;

use Illuminate\Contracts\Routing\Registrar as Router;

class Urls
{
    /**
     * The router implementation.
     *
     * @var Router
     */
    protected $router;

    /**
     * Create a new route registrar instance.
     *
     * @param  Router  $router
     * @return void
     */
    public function __construct(Router $router)
    {
        $this->router = $router;
    }

    /**
     * Register routes for transient tokens, clients, and personal access tokens.
     *
     * @return void
     */
    public function all()
    {
        $this->web();
        $this->api();
    }

    public function web($option = [])
    {
        $this->router->group(array_merge($option, ['domain' => config('viender.web_domain'), 'middleware' => 'web']), function() {
            $this->router->get('/', 'ReadController@index')->name('web.viender.socialite.pages.read');

            $this->router->get('answer', 'AnswerController@index')->name('web.viender.socialite.pages.answer');

            $this->router->get('questions/{question}', 'QuestionShowController@show')->name('web.viender.socialite.pages.questionShow');

            $this->router->get('questions/{question}/answers/{answerSlug}', 'AnswerShowController@show')->name('web.viender.socialite.pages.answerShow');
        });
    }

    public function api()
    {
        $this->version1(['showVersionPrefix' => false]);
    }

    public function version1($option = [])
    {
        $namePrefix = 'api' . (isset($option['showVersionPrefix']) ? ($option['showVersionPrefix'] ? '.v1' : '') : '.v1') . '.viender.socialite';

        $this->router->group(array_merge($option, ['domain' => config('viender.api_domain'), 'namespace' => 'Api', 'middleware' => 'api']), function() use ($namePrefix) {

            // Models
            $this->router->resource('stars', 'StarsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('answers', 'AnswersController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('questions', 'QuestionsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('comments', 'CommentsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('tags', 'TagsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('upvotes', 'UpvotesController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('downvotes', 'DownvotesController', ['as' => $namePrefix,'except' => ['create', 'edit']]);


            // Relationships
            // Relationships - Ask
            $this->router->resource(
                'users.questions',
                'UserQuestionsController', [
                    'as' => $namePrefix,
                    'except' => ['create', 'edit']
                ]
            );

            $this->router->resource(
                'users.answers',
                'UserAnswersController', [
                    'as' => $namePrefix,
                    'except' => ['create', 'edit']
                ]
            );

            $this->router->resource(
                'questions.answers',
                'QuestionAnswersController', [
                    'as' => $namePrefix,
                    'except' => ['create', 'edit']
                ]
            );

            $this->router->resource(
                'topics.answers',
                'TopicAnswersController', [
                    'as' => $namePrefix,
                    'only' => ['index']
                ]
            );

            $this->router->resource(
                'topics.questions',
                'TopicQuestionsController', [
                    'as' => $namePrefix,
                    'only' => ['index']
                ]
            );


            // Relationships - Tag
            $this->router->resource('users.tags', 'UserTagsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('questions.tags', 'QuestionTagsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);

            $this->router->resource('tags.users', 'TagUsersController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('tags.questions', 'TagQuestionsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);


            // Relationships - Comment
            $this->router->resource('users.comments', 'UserCommentsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('questions.comments', 'QuestionCommentsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('answers.comments', 'AnswerCommentsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('comments/{commentable}/comments', 'CommentCommentsController', ['as' => $namePrefix . '.comments','except' => ['create', 'edit']]);


            // Relationships - Vote
            $this->router->resource('users.upvotes', 'UserUpvotesController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('questions.upvotes', 'QuestionUpvotesController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('answers.upvotes', 'AnswerUpvotesController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('comments.upvotes', 'CommentUpvotesController', ['as' => $namePrefix,'except' => ['create', 'edit']]);

            $this->router->resource('users.downvotes', 'UserDownvotesController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('questions.downvotes', 'QuestionDownvotesController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('answers.downvotes', 'AnswerDownvotesController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
            $this->router->resource('comments.downvotes', 'CommentDownvotesController', ['as' => $namePrefix,'except' => ['create', 'edit']]);

            // Relationships - Tutor rating
            $this->router->resource('users.stars', 'UserStarsController', ['as' => $namePrefix,'except' => ['create', 'edit']]);
        });
    }
}
