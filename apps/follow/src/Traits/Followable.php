<?php

namespace Viender\Follow\Traits;

trait Followable
{
	public function followers()
	{
		return $this->hasMany('Viender\Follow\Models\Follower', 'user_id');
	}

	public function followings()
	{
		return $this->hasMany('Viender\Follow\Models\Follower', 'follower_id');
	}
}
