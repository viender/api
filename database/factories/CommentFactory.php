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
$factory->define(App\Comment::class, function (Faker\Generator $faker) {
    
    $users = App\User::all()->pluck('id')->toArray();
    
    $commentables = [
        'App\Question',
        'App\Answer'
    ];

    return [
        'user_id' => $faker->randomElement($users),
        'commentable_type' => $faker->randomElement($commentables),
        'commentable_id' =>  function(array $me) {
            return $faker->randomElement($me['commentable_type']::all()->pluck('id')->toArray());
        },
        'body' => implode(" ", $faker->paragraphs(3)),
    ];
});