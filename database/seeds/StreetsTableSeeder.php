<?php

use Illuminate\Database\Seeder;

class StreetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Street::class, 10)->create();
    }
}
