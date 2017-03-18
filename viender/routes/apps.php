<?php

Viender\Dealer\Dealer::routes();
Viender\Mytutor\Mytutor::routes(['prefix' => 'jobs']);
Viender\Mytutor\Mytutor::routes(['prefix' => 'v1/jobs'], function ($router) {
    $router->apiVersion1();
});
Viender\Address\Address::routes();
Viender\Socialite\Socialite::routes();
Viender\Profile\Profile::routes(['prefix' => 'profile']);