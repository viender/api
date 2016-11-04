<?php

use Illuminate\Database\Seeder;

class DownvotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Downvote::class, 1)->create();
    }
}
