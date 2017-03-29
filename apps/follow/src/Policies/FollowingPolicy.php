<?php

namespace Viender\Follow\Policies;

use App\User;
use Viender\Follow\Models\Follow;
use Illuminate\Auth\Access\HandlesAuthorization;

class FollowingPolicy
{
    use HandlesAuthorization;

    public function view(User $user, Follow $follower)
    {
        return true;
    }

    public function create(User $user)
    {
        return true;
    }

    public function delete(User $user, Follow $follower)
    {
        return $user->id === $follower->follower_id;
    }
}
