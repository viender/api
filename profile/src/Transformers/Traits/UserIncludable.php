<?php

namespace Viender\Profile\Transformers\Traits;

use Viender\Profile\Transformers\UserTransformer;

trait UserIncludable
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

    public function includeUser($item)
    {
        return $this->includeOwner($item);
    }

    public function includeActor($item)
    {
        return $this->includeOwner($item);
    }

    public function includeAuthor($item)
    {
        return $this->includeOwner($item);
    }
}