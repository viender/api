<?php

namespace Viender\XXXTemplateXXX;

use Illuminate\Support\Facades\Route;

class XXXTemplateXXX
{
	
	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\XXXTemplateXXX\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        }); 
	}
}
