<?php

namespace Viender\Tutor;

use Illuminate\Support\Facades\Route;

class Tutor
{
	
	public static function routes($callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge([
            'namespace' => '\Viender\Tutor\Http\Controllers',
            'middleware' => 'api'
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new RouteRegistrar($router));
        }); 
	}
}