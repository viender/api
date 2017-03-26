<?php

namespace Viender\Follow\Traits;

use Viender\Follow\Models\Follower;

trait Followable
{
	public function followers()
	{
		return $this->hasMany('Viender\Follow\Models\Follower', 'followee_id');
	}

	public function followings()
	{
		return $this->morphMany(Follower::class, 'follower');
	}
}
