<?php

namespace Viender\Mytutor;

use Illuminate\Support\Facades\Route;

class Mytutor
{
	
	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\Mytutor\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        });
	}
}