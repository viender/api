<?php

namespace App\Providers;

use Viender\Dealer\Dealer;
use Viender\Courier\Courier;
use Viender\Userdata\Userdata;
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
        Userdata::routes();
        Courier::routes();
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
