<?php

namespace App\Providers;

use Viender\Socialite\Socialite;
use Viender\Userdata\Userdata;
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
        Socialite::routes();
        Userdata::routes();
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
