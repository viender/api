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

        $this->loadViewsFrom(__DIR__.'/../resources/pages/feed/views', 'viender.mytutor.feed');
        $this->loadViewsFrom(__DIR__.'/../resources/pages/postTutoring/views', 'viender.mytutor.postTutoring');
        $this->loadViewsFrom(__DIR__.'/../resources/pages/postBid/views', 'viender.mytutor.postBid');
        $this->loadViewsFrom(__DIR__.'/../resources/pages/showTutoring/views', 'viender.mytutor.showTutoring');
        $this->loadViewsFrom(__DIR__.'/../resources/pages/showBid/views', 'viender.mytutor.showBid');

        $this->loadTranslationsFrom(__DIR__.'/../resources/pages/feed/lang', 'viender.mytutor.feed');
        $this->loadTranslationsFrom(__DIR__.'/../resources/pages/postTutoring/lang', 'viender.mytutor.postTutoring');
        $this->loadTranslationsFrom(__DIR__.'/../resources/pages/postBid/lang', 'viender.mytutor.postBid');
        $this->loadTranslationsFrom(__DIR__.'/../resources/pages/showTutoring/lang', 'viender.mytutor.showTutoring');
        $this->loadTranslationsFrom(__DIR__.'/../resources/pages/showBid/lang', 'viender.mytutor.showBid');
    }
}
