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
        
    ];
    
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Follower $follower)
    {
        return [
            'user_id' => $follower->follower_id,
        ];
    }
}
