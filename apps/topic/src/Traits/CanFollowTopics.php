<?php

namespace Viender\Topic\Traits;

use Viender\Topic\Models\Topic;
use Viender\Follow\Models\Follow;

trait CanFollowTopics
{
	public function followedTopics()
	{
		return $this->morphMany(Follow::class, 'follower')->where('followee_type', Topic::class);
	}
}
