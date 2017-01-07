<?php

namespace Viender\Socialite\Transformers\Version1;

use Viender\Socialite\Downvote;
use Viender\Socialite\Transformers\Version1\Traits\UserIncludable;
use Viender\Socialite\Transformers\Version1\Traits\DownvotableIncludable;

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