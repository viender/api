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
        factory(\Viender\Socialite\Models\Downvote::class, 100)->create();
    }
}
