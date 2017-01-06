<?php

use Illuminate\Database\Seeder;

class AuctionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(Viender\Ideapool\Auction::class, 20)->create()->each(function($u) {
            
            $faker = Faker\Factory::create();
            
            $tags = Viender\Ideapool\Tag::all()->pluck('id')->toArray();

            $tag = Viender\Ideapool\Tag::find($faker->randomElement($tags));

            $u->tags()->save($tag);

            foreach (range(1, 2) as $i) {
                if(rand(0, 1)) {
                    $tag = Viender\Ideapool\Tag::find($faker->randomElement($tags));

                    $u->tags()->save($tag);
                }
            }
        });
    }
}
