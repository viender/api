<?php
Route::group(['namespace' => 'Api'], function() {
	Route::get('user', 'UsersController@authenticated')->name('api.viender.core.me');

	Route::resource('users', 'UsersController', ['except' => ['create', 'edit'], 'as' => 'api.viender.core']);

	Route::get('inspire', function()
	{
        // $start = microtime(true);
		$http = new GuzzleHttp\Client;
        $response = $http->post('http://api.forismatic.com/api/1.0/', [
            'form_params' => [
                'method'    => 'getQuote',
                'key'       => '457653',
                'format'    => 'json',
                'lang'      => 'en'
            ],
        ]);
        return $response;
        $quote = json_decode((string) $response->getBody(), true);
        // $quote['execution_time'] = microtime(true) - $start;
	});
});
