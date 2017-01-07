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
$factory->define(Viender\Userdata\ZipCode::class, function (Faker\Generator $faker) {

    $cities = Viender\Userdata\City::all()->pluck('id')->toArray();

    return [
        'city_id' => $faker->randomElement($cities),
        'state_id' => function(array $me) {
            return Viender\Userdata\City::where('id', $me['city_id'])->first()->state()->first()->id;
        },
        'country_id' => function(array $me) {
            return Viender\Userdata\City::where('id', $me['city_id'])->first()->country()->first()->id;
        },
        'code' => $faker->postcode,
    ];
});