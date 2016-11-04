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
$factory->define(App\Question::class, function (Faker\Generator $faker) {
    
    $users = App\User::all()->pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($users),
        'title' => trim($faker->sentence(), '.').'?',
        'body' => implode(" ", $faker->paragraphs(3)),
    ];
});