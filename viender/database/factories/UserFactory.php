<?php

use Viender\Utilities\Text;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;
    $genders = ['male', 'female'];
    $name = $faker->name;

    $http = new GuzzleHttp\Client;
    $response = $http->get('https://randomuser.me/api');
    $user = json_decode((string) $response->getBody(), true)['results'][0];

    return [
        'first_name'        => $user['name']['first'],
        'last_name'         => $user['name']['last'],
        'avatar_url'        => $user['picture']['thumbnail'],
        'avatar_medium_url' => $user['picture']['medium'],
        'avatar_large_url'  => $user['picture']['large'],
        'username'          => $user['login']['username'],
        'email'             => $user['email'],
        'password'          => $password ?: $password = bcrypt('secret'),
        'gender'            => $user['gender'],
        'remember_token'    => $user['login']['md5'],
    ];
});
