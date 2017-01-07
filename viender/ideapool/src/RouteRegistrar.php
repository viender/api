<?php

namespace Viender\Ideapool;

use Illuminate\Contracts\Routing\Registrar as Router;

class RouteRegistrar
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
        $this->head();
        $this->version1();
    }

    public function head()
    {
        $this->version1(['prefix' => '']);
    }

    public function version1($option = [])
    {
        $this->router->group(array_merge(['prefix' => 'v1'], $option, ['namespace' => 'Api\Version1']), function() {

            // Models
            $this->router->resource('users', 'UsersController', ['except' => ['create', 'edit']]);
            $this->router->resource('stars', 'StarsController', ['except' => ['create', 'edit']]);
            $this->router->resource('answers', 'AnswersController', ['except' => ['create', 'edit']]);
            $this->router->resource('questions', 'QuestionsController', ['except' => ['create', 'edit']]);
            $this->router->resource('auctions', 'AuctionsController', ['except' => ['create', 'edit']]);
            $this->router->resource('bids', 'BidsController', ['except' => ['create', 'edit']]);
            $this->router->resource('comments', 'CommentsController', ['except' => ['create', 'edit']]);
            $this->router->resource('tags', 'TagsController', ['except' => ['create', 'edit']]);
            $this->router->resource('upvotes', 'UpvotesController', ['except' => ['create', 'edit']]);
            $this->router->resource('downvotes', 'DownvotesController', ['except' => ['create', 'edit']]);


            // Relationships
            // Relationships - Ask
            $this->router->resource('users.questions', 'UserQuestionsController', ['except' => ['create', 'edit']]);
            $this->router->resource('users.answers', 'UserAnswersController', ['except' => ['create', 'edit']]);
            $this->router->resource('questions.answers', 'QuestionAnswersController', ['except' => ['create', 'edit']]);


            // Relationships - Tag
            $this->router->resource('users.tags', 'UserTagsController', ['except' => ['create', 'edit']]);
            $this->router->resource('questions.tags', 'QuestionTagsController', ['except' => ['create', 'edit']]);
            $this->router->resource('auctions.tags', 'AuctionTagsController', ['except' => ['create', 'edit']]);
            
            $this->router->resource('tags.users', 'TagUsersController', ['except' => ['create', 'edit']]);
            $this->router->resource('tags.questions', 'TagQuestionsController', ['except' => ['create', 'edit']]);
            $this->router->resource('tags.auctions', 'TagAuctionsController', ['except' => ['create', 'edit']]);


            // Relationships - Comment
            $this->router->resource('users.comments', 'UserCommentsController', ['except' => ['create', 'edit']]);
            $this->router->resource('questions.comments', 'QuestionCommentsController', ['except' => ['create', 'edit']]);
            $this->router->resource('answers.comments', 'AnswerCommentsController', ['except' => ['create', 'edit']]);
            $this->router->resource('comments/{commentable}/comments', 'CommentCommentsController', ['except' => ['create', 'edit']]);


            // Relationships - Vote
            $this->router->resource('users.upvotes', 'UserUpvotesController', ['except' => ['create', 'edit']]);
            $this->router->resource('questions.upvotes', 'QuestionUpvotesController', ['except' => ['create', 'edit']]);
            $this->router->resource('answers.upvotes', 'AnswerUpvotesController', ['except' => ['create', 'edit']]);
            $this->router->resource('comments.upvotes', 'CommentUpvotesController', ['except' => ['create', 'edit']]);

            $this->router->resource('users.downvotes', 'UserDownvotesController', ['except' => ['create', 'edit']]);
            $this->router->resource('questions.downvotes', 'QuestionDownvotesController', ['except' => ['create', 'edit']]);
            $this->router->resource('answers.downvotes', 'AnswerDownvotesController', ['except' => ['create', 'edit']]);
            $this->router->resource('comments.downvotes', 'CommentDownvotesController', ['except' => ['create', 'edit']]);


            // Relationships - Tutor seeker
            $this->router->resource('users.auctions', 'UserAuctionsController', ['except' => ['create', 'edit']]);
            $this->router->resource('users.bids', 'UserBidsController', ['except' => ['create', 'edit']]);
            $this->router->resource('auctions.bids', 'AuctionBidsController', ['except' => ['create', 'edit']]);


            // Relationships - Tutor rating
            $this->router->resource('users.stars', 'UserStarsController', ['except' => ['create', 'edit']]);
        });
    }
}
