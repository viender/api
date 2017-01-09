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
$factory->define(\Viender\Dealer\Bid::class, function (Faker\Generator $faker) {
    
    $users = App\User::all()->pluck('id')->toArray();
    $auctions = \Viender\Dealer\Auction::all()->pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($users),
        'auction_id' => $faker->randomElement($auctions),
        'title' => $faker->sentence(),
        'body' => implode(" ", $faker->paragraphs(3)),
        'offered_price' => rand(50000, 500000),
        'deal' => true,
    ];
});