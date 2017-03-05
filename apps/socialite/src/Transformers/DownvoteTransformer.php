<?php

namespace Viender\Socialite\Transformers;

use Viender\Socialite\Models\Downvote;
use Viender\Profile\Transformers\Traits\UserIncludable;
use Viender\Socialite\Transformers\Traits\DownvotableIncludable;

class DownvoteTransformer extends Transformer
{
    use UserIncludable, DownvotableIncludable;
    
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'owner', 'downvotable',
    ];
    
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Downvote $downvote)
    {
        return [
            'id'      => (int) $downvote->id,
        ];
    }
}