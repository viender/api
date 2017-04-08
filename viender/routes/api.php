<?php
Route::group(['namespace' => 'Api'], function() {
	Route::get('user', 'UsersController@authenticated')->name('api.viender.core.me');

	Route::resource('users', 'UsersController', ['except' => ['create', 'edit'], 'as' => 'api.viender.core']);

	Route::get('inspire', 'InspireController@index');
});
