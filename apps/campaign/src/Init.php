<?php

namespace Viender\Campaign;

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

        $this->loadViewsFrom(__DIR__.'/../resources/pages/campaign/views', 'viender.campaign.campaign');
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
