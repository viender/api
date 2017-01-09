<?php

namespace Viender\Dealer;

use Illuminate\Support\Facades\Route;

class Dealer
{
	
	public static function routes($callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge([
            'namespace' => '\Viender\Dealer\Http\Controllers',
            'middleware' => 'api'
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new RouteRegistrar($router));
        }); 
	}
}