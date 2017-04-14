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

        App\User::create([
            'first_name'        => 'Wahyu',
            'last_name'         => 'Nugraha',
            'avatar_url'        => '/profile.jpg',
            'avatar_medium_url' => '/profile-medium.jpg',
            'avatar_large_url'  => '/profile-large.jpg',
            'username'          => 'wahyu-nugraha',
            'email'             => 'nugraha.c.wahyu@gmail.com',
            'password'          => 'open1234',
        ]);

        factory(App\User::class, 50)->create()->each(function($user) use(&$tags) {

            $user->addresses()->save(factory(\Viender\Address\Models\Address::class)->make());

            foreach (range(1, rand(2, 5)) as $index) {
                $user->tags()->toggle(\Viender\Socialite\Models\Tag::find(array_rand($tags)));
            }
        });
    }
}
