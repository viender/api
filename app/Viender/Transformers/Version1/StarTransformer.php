<?php

namespace App\Viender\Transformers\Version1;

use App\Star;
use App\Viender\Transformers\Version1\Traits\OwnerIncludable;
use App\Viender\Transformers\Version1\Traits\StarableIncludable;

class StarTransformer extends Transformer
{
    use OwnerIncludable, StarableIncludable;
    
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