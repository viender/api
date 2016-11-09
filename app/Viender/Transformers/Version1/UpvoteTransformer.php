<?php

namespace App\Viender\Transformers\Version1;

use App\Upvote;
use App\Viender\Transformers\Version1\Traits\OwnerIncludable;
use App\Viender\Transformers\Version1\Traits\UpvotableIncludable;

class UpvoteTransformer extends Transformer
{
    use OwnerIncludable, UpvotableIncludable;
    
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'owner', 'upvotable',
    ];
    
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Upvote $upvote)
    {
        return [
            'id'      => (int) $upvote->id,
        ];
    }
}