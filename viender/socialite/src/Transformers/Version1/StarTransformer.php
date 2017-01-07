<?php

namespace Viender\Socialite\Transformers\Version1;

use Viender\Socialite\Star;
use Viender\Socialite\Transformers\Version1\Traits\UserIncludable;
use Viender\Socialite\Transformers\Version1\Traits\StarableIncludable;

class StarTransformer extends Transformer
{
    use UserIncludable, StarableIncludable;
    
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'owner', 'starable',
    ];
    
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Star $star)
    {
        return [
            'id'      => (int) $star->id,
        ];
    }
}