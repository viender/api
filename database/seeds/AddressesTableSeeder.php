<?php

use Illuminate\Database\Seeder;

class AddressesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $cities = App\City::all()->pluck('id')->toArray();

        foreach (App\User::all() as $user) {
            $street = App\Street::create([
                'city_id' => $faker->randomElement($cities),
                'name' => $faker->streetAddress,    
            ]);

            App\Address::create([
                'user_id' => $user->id,
                'street_id' => $street->id,
            ]);
        }
        // factory(App\Address::class, 1000)->create();
    }
}
