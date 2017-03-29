<?php

namespace Viender\Topic\Policies;

use App\User;
use Viender\Topic\Models\Topic;
use Illuminate\Auth\Access\HandlesAuthorization;

class FollowingPolicy
{
    use HandlesAuthorization;

    public function view(User $user, Topic $topic)
    {
        return true;
    }

    public function create(User $user)
    {
        return true;
    }

    public function delete(User $user, Topic $topic)
    {
        return false;
    }
}
