<?php

namespace App\Providers;

use Viender\Dealer\Dealer;
use Viender\Mytutor\Mytutor;
use Viender\Profile\Profile;
use Viender\Socialite\Socialite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Dealer::routes();
        Mytutor::routes(['prefix' => 'jobs']);
        Mytutor::routes(['prefix' => 'v1/jobs'], function ($router) {
            $router->apiVersion1();
        });
        Profile::routes();
        Socialite::routes();
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
