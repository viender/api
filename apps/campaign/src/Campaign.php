<?php

namespace Viender\Campaign;

use Illuminate\Support\Facades\Route;

class Campaign
{
	
	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\Campaign\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        }); 
	}
}
