<?php

namespace Viender\Mytutor;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class Init extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        \Viender\Mytutor\Models\Tutoring::class => \Viender\Mytutor\Policies\TutoringPolicy::class,
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
        $this->mergeConfigFrom(__DIR__.'/Config.php', 'viender.mytutor');

        $this->loadViewsFrom(__DIR__.'/../resources/feed/views', 'viender.mytutor.feed');
        $this->loadViewsFrom(__DIR__.'/../resources/postTutoring/views', 'viender.mytutor.postTutoring');
        $this->loadViewsFrom(__DIR__.'/../resources/postBid/views', 'viender.mytutor.postBid');
        $this->loadViewsFrom(__DIR__.'/../resources/showTutoring/views', 'viender.mytutor.showTutoring');
        $this->loadViewsFrom(__DIR__.'/../resources/showBid/views', 'viender.mytutor.showBid');

        $this->loadTranslationsFrom(__DIR__.'/../resources/feed/lang', 'viender.mytutor.feed');
        $this->loadTranslationsFrom(__DIR__.'/../resources/postTutoring/lang', 'viender.mytutor.postTutoring');
        $this->loadTranslationsFrom(__DIR__.'/../resources/postBid/lang', 'viender.mytutor.postBid');
        $this->loadTranslationsFrom(__DIR__.'/../resources/showTutoring/lang', 'viender.mytutor.showTutoring');
        $this->loadTranslationsFrom(__DIR__.'/../resources/showBid/lang', 'viender.mytutor.showBid');
    }
}
