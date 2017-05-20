<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'viender' => [
        'feed' => [
            'host'  => env('VIENDER_FEED_HOST', 'localhost'),
            'port'  => env('VIENDER_FEED_PORT', '3000'),
            'url'   => env('VIENDER_FEED_HOST', 'localhost') . ':' . env('VIENDER_FEED_PORT', '3000') . '/api/users',
        ]
    ],

    'imaginary' => [
        'host' => env('IMAGINARY_HOST', 'localhost'),
        'port' => env('IMAGINARY_PORT', '9000'),
    ]

];
