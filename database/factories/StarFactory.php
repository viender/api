<?php

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
$factory->define(App\Ideapool\Star::class, function (Faker\Generator $faker) {

    $users = App\User::all()->pluck('id')->toArray();

    $starables = [
        'App\User',
    ];

    return [
        'user_id' => $faker->randomElement($users),
        'starable_type' => $faker->randomElement($starables),
        'starable_id' => function(array $me) {
            $faker = Faker\Factory::create();
            return $faker->randomElement($me['starable_type']::all()->pluck('id')->toArray());
        },
        'count' => rand(1, 5),
    ];
});