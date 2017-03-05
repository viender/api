<?php

namespace Viender\Dealer;

use Illuminate\Support\ServiceProvider;

class DealerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        $this->mergeConfigFrom(__DIR__.'/Config.php', 'viender.dealer');
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'viender.dealer');
        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'viender.dealer');
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
