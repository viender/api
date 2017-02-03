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
$factory->define(Viender\Userdata\Address::class, function (Faker\Generator $faker) {
    
    $users = App\User::all()->pluck('id')->toArray();
    $zipCodes = Viender\Userdata\ZipCode::all()->pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($users),
        'zip_code_id' => $faker->randomElement($zipCodes),
        'city_id' => function(array $me) {
            return Viender\Userdata\ZipCode::where('id', $me['zip_code_id'])->first()->city()->first()->id;
        },
        'state_id' => function(array $me) {
            return Viender\Userdata\ZipCode::where('id', $me['zip_code_id'])->first()->state()->first()->id;
        },
        'country_id' => function(array $me) {
            return Viender\Userdata\ZipCode::where('id', $me['zip_code_id'])->first()->country()->first()->id;
        },
        'active' => true,
        'street' => $faker->streetName,
    ];
});