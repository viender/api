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
$factory->define(App\Ideapool\State::class, function (Faker\Generator $faker) {

    $countries = App\Ideapool\Country::all()->pluck('id')->toArray();

    return [
        'country_id' => $faker->randomElement($countries),
        'name' => $faker->state,
    ];
});