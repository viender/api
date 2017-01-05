<?php

namespace App\Ideapool;

use Illuminate\Support\Facades\Route;

class Ideapool
{
	
	public static function routes($callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge([
            'namespace' => '\App\Ideapool\Http\Controllers\Api\Version1',
            'middleware' => 'api'
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new RouteRegistrar($router));
        }); 
	}
}