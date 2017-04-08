<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = \Viender\Socialite\Models\Tag::all()->pluck('id')->toArray();

        factory(App\User::class, 50)->create()->each(function($user) use(&$tags) {

            $user->addresses()->save(factory(\Viender\Address\Models\Address::class)->make());

            foreach (range(1, rand(2, 5)) as $index) {
                $user->tags()->toggle(\Viender\Socialite\Models\Tag::find(array_rand($tags)));
            }
        });
    }
}
