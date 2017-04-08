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
            'followable_id' => $topic->id,
        ])->exists()) {
            $user->followedTopics()->detach($topic);
            return false;
        } else {
            $user->followedTopics()->attach($topic);
            return true;
        }

        return false;
    }
}
