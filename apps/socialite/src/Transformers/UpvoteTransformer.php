<?php

namespace Viender\Socialite\Transformers;

use Viender\Socialite\Models\Upvote;
use Viender\Address\Transformers\Traits\UserIncludable;
use Viender\Socialite\Transformers\Traits\UpvotableIncludable;

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