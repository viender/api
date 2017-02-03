<?php

namespace App\Providers;

use Viender\Dealer\Dealer;
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
        Socialite::routes();
        Profile::routes();
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
