<?php

namespace Viender\Socialite;

use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Comment;
use Viender\Socialite\Models\Question;
use Viender\Socialite\Policies\AnswerPolicies;
use Viender\Socialite\Policies\CommentPolicies;
use Viender\Socialite\Policies\QuestionPolicies;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class Init extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Answer::class => AnswerPolicies::class,
        Question::class => QuestionPolicies::class,
        Comment::class => CommentPolicies::class,
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        $this->loadViewsFrom(__DIR__.'/../resources/pages/answer/views', 'viender.socialite.answer');
        $this->loadViewsFrom(__DIR__.'/../resources/pages/answerShow/views', 'viender.socialite.answerShow');
        $this->loadViewsFrom(__DIR__.'/../resources/pages/questionShow/views', 'viender.socialite.questionShow');
        $this->loadViewsFrom(__DIR__.'/../resources/pages/read/views', 'viender.socialite.read');

    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
