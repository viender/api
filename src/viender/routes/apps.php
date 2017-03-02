<?php

use Viender\Dealer\Dealer;
use Viender\Mytutor\Mytutor;
use Viender\Profile\Profile;
use Viender\Socialite\Socialite;

Dealer::routes();
Mytutor::routes(['prefix' => 'jobs']);
Mytutor::routes(['prefix' => 'v1/jobs'], function ($router) {
    $router->apiVersion1();
});
Profile::routes();
Socialite::routes();