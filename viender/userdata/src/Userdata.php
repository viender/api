<?php

namespace Viender\Userdata;

use Illuminate\Support\Facades\Route;

class Userdata
{
    public static function routes($callback = null)
    {
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge([
            'namespace' => '\Viender\Userdata\Http\Controllers',
            'middleware' => 'api'
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new RouteRegistrar($router));
        });
    }
}