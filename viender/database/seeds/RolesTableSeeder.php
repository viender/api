<?php

use App\User;
use Viender\Role\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        echo 'Creating roles' . PHP_EOL;

        if (!Role::where('name', 'standard')->exists())
            Role::create(['name' => 'standard']);

        if (!Role::where('name', 'admin')->exists())
            Role::create(['name' => 'admin']);

        if (!Role::where('name', 'verified')->exists())
            Role::create(['name' => 'verified']);

        echo 'Done' . PHP_EOL;

        $role = Role::where('name', 'standard')->first();

        foreach (User::all() as $user) {
            if (!$user->roles()->where('name', 'standard')->exists()) {
                echo 'Adding role ' . $role->name . ' to ' . $user->fullName() . PHP_EOL;
                $user->roles()->attach($role);
            } else {
                echo 'Role ' . $role->name . ' already exists on ' . $user->fullName() . PHP_EOL;
            }
        }
    }
}
