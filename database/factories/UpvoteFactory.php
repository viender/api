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
$factory->define(App\Upvote::class, function (Faker\Generator $faker) {

    $users = App\User::all()->pluck('id')->toArray();

    $upvotables = [
        'App\Question',
        'App\Answer',
        'App\Comment',
    ];

    return [
        'user_id' => $faker->randomElement($users),
        'upvotable_type' => $faker->randomElement($upvotables),
        'upvotable_id' => function(array $me) {
            $faker = Faker\Factory::create();
            return $faker->randomElement($me['upvotable_type']::all()->pluck('id')->toArray());
        },
    ];
});