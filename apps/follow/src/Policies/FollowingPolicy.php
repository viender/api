<?php

namespace Viender\Follow\Policies;

use App\User;
use Viender\Follow\Models\Follower;
use Illuminate\Auth\Access\HandlesAuthorization;

class FollowingPolicy
{
    use HandlesAuthorization;

    public function view(User $user, Follower $follower)
    {
        return true;
    }

    public function create(User $user)
    {
        return true;
    }

    public function delete(User $user, Follower $follower)
    {
        return $user->id === $follower->follower_id;
    }
}
