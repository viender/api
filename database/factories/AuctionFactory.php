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
$factory->define(App\Auction::class, function (Faker\Generator $faker) {
    
    $users = App\User::all()->pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($users),
        'title' => $faker->sentence(),
        'slug' => function(array $me) {
            return  App\Viender\Utilities\Text::clean($me['title']);
        },
        'body' => implode(" ", $faker->paragraphs(3)),
        'price' => rand(50000, 500000),
        'status' => true,
    ];
});