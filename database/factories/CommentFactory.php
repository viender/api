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

class FactoryStatus {
    public static $isFirst = true;
}

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Comment::class, function (Faker\Generator $faker) {
    
    $users = App\User::all()->pluck('id')->toArray();
    
    return [
        'user_id' => $faker->randomElement($users),

        'commentable_type' => function(array $me) {

            $faker = Faker\Factory::create();

            $commentables = [
                'App\Question',
                'App\Answer',
                'App\Comment',
            ];

            $commentable = $faker->randomElement($commentables);

            while($commentable == 'App\Comment' && FactoryStatus::$isFirst) {
                $commentable = $faker->randomElement($commentables);
            }

            FactoryStatus::$isFirst = false;

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