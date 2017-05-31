<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::group(['domain' => 'accounts.' . config('viender.web_domain')], function() {
	Route::get('/', 'HomeController@index');
});

Route::put('/profile', 'UsersController@update')->name('web.viender.profile.update');

Route::get('/welcome', 'HomeController@welcome');

Route::get('/sw.js', 'ServiceWorkerController@index');

Route::get('/about/privacy', 'PagesController@privacy');

Route::get('/test', function ()
{
    echo 'hi';
});
