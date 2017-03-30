<?php

namespace Viender\Topic;

use Viender\Topic\Models\Topic;
use Viender\Topic\Policies\FollowingPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class Init extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Topic::class => FollowingPolicy::class,
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

        $this->loadViewsFrom(__DIR__.'/../resources/core/layouts', 'viender.topic.layouts');

        $this->loadViewsFrom(__DIR__.'/../resources/pages/topic/views', 'viender.topic.topic');
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        
    }
}
