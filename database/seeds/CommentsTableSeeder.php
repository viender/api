<?php

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1, 500) as $i) {
            factory(Viender\Ideapool\Comment::class, 1)->create();
        }
    }
}
