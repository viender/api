<?php

namespace Viender\Follow\Traits;

use Viender\Follow\Models\Follow;

trait Followable
{
	public function followers()
	{
		return $this->hasMany('Viender\Follow\Models\Follow', 'followee_id');
	}

	public function followings()
	{
		return $this->morphMany(Follow::class, 'follower');
	}
}
