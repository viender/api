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

        factory(App\Auction::class, 20)->create()->each(function($u) {
            
            $faker = Faker\Factory::create();
            
            $tags = App\Tag::all()->pluck('id')->toArray();

            $tag = App\Tag::find($faker->randomElement($tags));

            $u->tags()->save($tag);

            foreach (range(1, 2) as $i) {
                if(rand(0, 1)) {
                    $tag = App\Tag::find($faker->randomElement($tags));

                    $u->tags()->save($tag);
                }
            }
        });
    }
}
