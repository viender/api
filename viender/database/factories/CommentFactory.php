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

$GLOBALS['isFirst'] = true;

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(\Viender\Socialite\Models\Comment::class, function (Faker\Generator $faker) {

    $users = App\User::all()->pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($users),

        'commentable_type' => function(array $me) {

            $faker = Faker\Factory::create();

            $commentables = [
                'Viender\Socialite\Models\Question',
                'Viender\Socialite\Models\Answer',
                'Viender\Socialite\Models\Comment',
            ];

            $commentable = $faker->randomElement($commentables);

            while($commentable == 'Viender\Socialite\Models\Comment' && $GLOBALS['isFirst']) {
                $commentable = $faker->randomElement($commentables);
            }

            $GLOBALS['isFirst'] = false;

            return $commentable;
        },
        'commentable_id' =>  function(array $me) {
            $faker = Faker\Factory::create();

            $id = $faker->randomElement($me['commentable_type']::all()->pluck('id')->toArray());

            return $id;
        },
        'body' => implode(" ", $faker->paragraphs(3)),
    ];
});
