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
$factory->define(App\Answer::class, function (Faker\Generator $faker) {
    
    $users = App\User::all()->pluck('id')->toArray();
    $questions = App\Question::all()->pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($users),
        'question_id' => $faker->randomElement($questions),
        'title' => '',
        'body' => implode(" ", $faker->paragraphs(3)),
    ];
});