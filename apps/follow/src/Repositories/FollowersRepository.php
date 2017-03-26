<?php

namespace Viender\Follow\Repositories;

use App\User;
use Viender\Follow\Models\Follower;

class FollowersRepository extends Repository
{
    public function model()
    {
        return 'Viender\Follow\Models\Follower';
    }

    public function userFollowUser(User $user1, User $user2)
    {
        if($user1->followings()->where([
            'follower_id'   => $user1->id,
            'followee_id'   => $user2->id,
            'followee_type' => User::class,
        ])->exists()) {
            $following = $user1->followings()->where('followee_id', $user2->id)->first();
            if ($following) $following->delete();
            return false;
        } else {
            $user1->followings()->save(new Follower(['followee_id' => $user2->id, 'followee_type' => User::class]));
            return true;
        }

        return false;
    }

    public function userUnfollowUser(User $user1, User $user2)
    {
        $following = $user1->followings()->where('followee_id', $user2->id)->first();

        if ($following) {
            $following->delete();
            return true;
        }

        return false;
    }
}
