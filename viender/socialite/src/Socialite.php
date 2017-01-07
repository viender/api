<?php

namespace Viender\Socialite;

use Illuminate\Support\Facades\Route;

class Socialite
{
	
	public static function routes($callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge([
            'namespace' => '\Viender\Socialite\Http\Controllers',
            'middleware' => 'api'
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new RouteRegistrar($router));
        }); 
	}
}