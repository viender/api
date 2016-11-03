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
$factory->define(App\Address::class, function (Faker\Generator $faker) {
    $users = App\User::all()->pluck('id')->toArray();
    $countries = App\Country::all()->pluck('id')->toArray();
    $states = App\State::all()->pluck('id')->toArray();
    $cities = App\City::all()->pluck('id')->toArray();
    $streets = App\Street::all()->pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($users),
        'street_id' => $faker->randomElement($streets),
        'city_id' => function(array $me) {
            return App\Street::where('id', $me['street_id'])->first()->city()->id;
        },
        'state_id' => function(array $me) {
            return App\Street::where('id', $me['street_id'])->first()->state()->id;
        },
        'country_id' => function(array $me) {
            return App\Street::where('id', $me['street_id'])->first()->country()->id;
        },
        'active' => $faker->randomElement([true, false]),
    ];
});