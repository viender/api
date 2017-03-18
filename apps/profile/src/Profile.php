<?php

namespace Viender\Profile;

use Illuminate\Support\Facades\Route;

class Profile
{
	
	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\Profile\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        }); 
	}
}