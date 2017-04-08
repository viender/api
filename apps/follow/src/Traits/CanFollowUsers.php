<?php

namespace Viender\Follow\Traits;

use App\User;
use Viender\Follow\Models\Follow;

trait CanFollowUsers
{
	// public function followedUsers()
	// {
	// 	return $this->morphMany(Follow::class, 'follower')->where('followee_type', User::class);
	// }

    public function followedUsers()
    {
        return $this->morphedByMany('App\User', 'followable');
    }
}
