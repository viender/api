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
    $streets = App\Street::all()->pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($users),
        'street_id' => $faker->randomElement($streets),
        'city_id' => function(array $me) {
            return App\Street::where('id', $me['street_id'])->first()->city()->first()->id;
        },
        'state_id' => function(array $me) {
            return App\Street::where('id', $me['street_id'])->first()->state()->first()->id;
        },
        'country_id' => function(array $me) {
            return App\Street::where('id', $me['street_id'])->first()->country()->first()->id;
        },
        'active' => $faker->randomElement([true, false]),
    ];
});