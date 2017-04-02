<?php

use Illuminate\Database\Seeder;

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\Viender\Socialite\Models\Question::class, 250)->create()->each(function($u) {
            
            $faker = Faker\Factory::create();
            
            $tags = \Viender\Socialite\Models\Tag::all()->pluck('id')->toArray();

            $tag = \Viender\Socialite\Models\Tag::find($faker->randomElement($tags));

            $u->tags()->save($tag);

            foreach (range(1, 2) as $i) {
                if(rand(0, 1)) {
                    $tag = \Viender\Socialite\Models\Tag::find($faker->randomElement($tags));

                    $u->tags()->save($tag);
                }
            }
        });
    }
}
