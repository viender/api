<?php

namespace Viender\Profile;

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

        $this->loadViewsFrom(__DIR__.'/../resources/pages/profile/views', 'viender.profile.profile');

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
