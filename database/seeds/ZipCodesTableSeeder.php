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
        factory(Viender\Ideapool\ZipCode::class, 10)->create();
    }
}