<?php

namespace Viender\Profile;

use Illuminate\Support\Facades\Route;

class Profile
{
    public static function routes($callback = null)
    {
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge([
            'namespace' => '\Viender\Profile\Http\Controllers',
            'middleware' => 'api'
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new RouteRegistrar($router));
        });
    }
}