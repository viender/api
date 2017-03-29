<?php

namespace Viender\Topic\Repositories;

use App\User;
use Viender\Topic\Models\Topic;
use Viender\Follow\Models\Follow;

class TopicsRepository extends Repository
{
    public function model()
    {
        return 'Viender\Topic\Models\Topic';
    }

    public function userFollowTopic(User $user, Topic $topic)
    {
		if($user->followedTopics()->where([
            'follower_id'   => $user->id,
            'followee_id'   => $topic->id,
            'followee_type' => Topic::class,
        ])->exists()) {
            $following = $user->followedTopics()->where('followee_id', $topic->id)->first();
            if ($following) $following->delete();
            return false;
        } else {
            return $user->followedTopics()->save(new Follow(['followee_id' => $topic->id, 'followee_type' => Topic::class]));
        }

        return false;
    }
}
