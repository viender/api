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
$factory->define(\Viender\Socialite\Models\Answer::class, function (Faker\Generator $faker) {
    
    $users = App\User::all()->pluck('id')->toArray();
    $questions = \Viender\Socialite\Models\Question::all()->pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($users),
        'question_id' => $faker->randomElement($questions),
        'slug' => function(array $me) {
        	$user = App\User::find($me['user_id']);
            return $user->username;
        },
        'body' => implode("\n", $faker->paragraphs(5)),
    ];
});