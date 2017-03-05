<?php

namespace Viender\Socialite;

use Illuminate\Support\ServiceProvider;

class Init extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        $this->loadViewsFrom(__DIR__.'/../resources/pages/answer/views', 'viender.socialite.answer');
        $this->loadViewsFrom(__DIR__.'/../resources/pages/feed/views', 'viender.socialite.feed');

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
