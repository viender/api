<?php

namespace App\Viender\Transformers\Version1\Traits;

use App\Viender\Transformers\Version1\UserTransformer;

trait OwnerIncludable
{
    /**
     * Include Owner
     *
     * @return League\Fractal\ItemResource
     */
    public function includeOwner($item)
    {
        $owner = $item->user;

        return $this->item($owner, new UserTransformer);
    }
}