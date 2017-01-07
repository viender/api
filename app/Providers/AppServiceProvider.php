<?php

namespace App\Providers;

use Viender\Ideapool\Ideapool;
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
        Ideapool::routes();
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
