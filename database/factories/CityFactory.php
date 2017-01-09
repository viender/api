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
$factory->define(Viender\Userdata\City::class, function (Faker\Generator $faker) {
    
    $states = Viender\Userdata\State::all()->pluck('id')->toArray();

    return [
        'state_id' => $faker->randomElement($states),
        'country_id' => function(array $me) {
            return Viender\Userdata\State::where('id', $me['state_id'])->first()->country()->first()->id;
        },
        'name' => $faker->city,
    ];
});