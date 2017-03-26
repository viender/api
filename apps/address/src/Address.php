<?php

namespace Viender\Address;

use Illuminate\Support\Facades\Route;

class Address
{
    public static function routes($callback = null)
    {
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge([
            'namespace' => '\Viender\Address\Http\Controllers',
            'middleware' => 'api'
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        });
    }
}
