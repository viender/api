<?php

use Illuminate\Database\Seeder;

class UpvotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Upvote::class, 1000)->create();
    }
}
