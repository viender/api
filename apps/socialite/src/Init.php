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
