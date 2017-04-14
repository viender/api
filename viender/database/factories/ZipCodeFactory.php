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
$factory->define(\Viender\Address\Models\ZipCode::class, function (Faker\Generator $faker) {

    $cities = \Viender\Address\Models\City::all()->pluck('id')->toArray();

    return [
        'city_id' => $faker->randomElement($cities),
        'state_id' => function(array $me) {
            return \Viender\Address\Models\City::find($me['city_id'])->state()->first()->id;
        },
        'country_id' => function(array $me) {
            return \Viender\Address\Models\City::find($me['city_id'])->country()->first()->id;
        },
        'code' => $faker->postcode,
    ];
});
