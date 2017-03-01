<?php

namespace Viender\Socialite;

use Illuminate\Support\Facades\Route;

class Socialite
{
	
	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\Socialite\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        }); 
	}
}