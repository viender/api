<?php

namespace Viender\Credential;

use Illuminate\Support\Facades\Route;

class Credential
{
	
	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\Credential\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        }); 
	}
}
