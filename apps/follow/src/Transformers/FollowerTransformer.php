<?php

namespace Viender\Follow\Transformers;

use Viender\Follow\Models\Follower;

class FollowerTransformer extends Transformer
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'follower', 'followee'
    ];
    
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Follower $follower)
    {
        return [
            'followee_id' => $follower->follower_id,
            'follower_id' => $follower->followee_id,
        ];
    }

    /**
     * Include Follower User
     *
     * @return League\Fractal\ItemResource
     */
    public function includeFollower($follower)
    {
        $user = $follower->follower;

        return $this->item($user, new UserTransformer);
    }

    /**
     * Include Followee User
     *
     * @return League\Fractal\ItemResource
     */
    public function includeFollowee($follower)
    {
        $user = $follower->followee;

        return $this->item($user, new UserTransformer);
    }
}
