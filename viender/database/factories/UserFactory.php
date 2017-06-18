<?php

use Carbon\Carbon;
use Viender\Utilities\Text;

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

$GLOBALS['index'] = 1;

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    $genders = ['male', 'female'];
    $name = $faker->name;

    $title = $faker->title();

    $firstName;
    $lastName = $faker->lastName;
    $gender;

    if ($title === 'Ms.') {
        $firstName = $faker->firstNameFemale;
        $gender = 'female';
    } else {
        $firstName = $faker->firstNameMale;
        $gender = 'female';
    }

    return [
        'first_name'            => $firstName,
        'last_name'             => $lastName,
        'avatar_url'            => 'public/images/profile.jpg',
        'avatar_medium_url'     => 'public/images/profile-medium.jpg',
        'avatar_large_url'      => 'public/images/profile-large.jpg',
        'avatar_original_url'   => 'public/images/profile-original.jpg',
        'username'              => $firstName . '-' . $lastName . '-' . $GLOBALS['index'],
        'email'                 => $faker->email,
        'password'              => bcrypt('secret'),
        'gender'                => $gender,
        'remember_token'        => sha1(1),
    ];

    $GLOBALS['index'] += 1;
});
