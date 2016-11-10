<?php

use Illuminate\Database\Seeder;

class ZipCodesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\ZipCode::class, 10)->create();
    }
}