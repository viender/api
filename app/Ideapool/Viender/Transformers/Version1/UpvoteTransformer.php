<?php

namespace App\Ideapool\Viender\Transformers\Version1;

use App\Ideapool\Upvote;
use App\Ideapool\Viender\Transformers\Version1\Traits\UserIncludable;
use App\Ideapool\Viender\Transformers\Version1\Traits\UpvotableIncludable;

class UpvoteTransformer extends Transformer
{
    use UserIncludable, UpvotableIncludable;
    
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