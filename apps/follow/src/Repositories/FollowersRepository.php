<?php

namespace Viender\Follow\Repositories;

use App\User;

class FollowersRepository extends Repository
{
    public function model()
    {
        return 'Viender\Follow\Models\Follower';
    }

    public function userFollowUser(User $follower, User $user)
    {
        $user->followers()->save($follower);
    }
}
