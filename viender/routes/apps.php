<?php

// Viender\Dealer\Dealer::routes();
// Viender\Mytutor\Mytutor::routes(['prefix' => 'jobs']);
// Viender\Mytutor\Mytutor::routes(['prefix' => 'v1/jobs'], function ($router) {
//     $router->apiVersion1();
// });
Viender\Sitemap\Sitemap::routes();
Viender\Address\Address::routes();
Viender\Socialite\Socialite::routes();
Viender\Profile\Profile::routes(['prefix' => 'profile']);
Viender\Follow\Follow::routes();
Viender\Topic\Topic::routes();
Viender\Raa\Raa::routes();
Viender\Feed\Feed::routes(['prefix' => 'feed']);
Viender\Campaign\Campaign::routes();
Viender\Role\Role::routes();
Viender\Imaginary\Imaginary::routes();
Viender\Notification\Notification::routes();
Viender\Social\Social::routes();
Viender\Mailer\Mailer::routes();
Viender\Credential\Credential::routes();
