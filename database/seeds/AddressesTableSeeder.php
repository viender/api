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

            $address = [];
            $address['user_id'] = $user->id;
            $address['street_id'] = $street->id;
            // $address['city_id'] = $street->city->id;
            // $address['state_id'] = $street->state->id;
            // $address['country_id'] = $street->country->id;

            App\Address::create($address);
        }
        // factory(App\Address::class, 1000)->create();
    }
}
