<?php
Route::group(['namespace' => 'Api'], function() {
	Route::get('user', 'UsersController@authenticated')->name('api.viender.core.me');

	// Models
	Route::resource('users', 'UsersController', ['except' => ['create', 'edit'], 'as' => 'api.viender.core']);
});