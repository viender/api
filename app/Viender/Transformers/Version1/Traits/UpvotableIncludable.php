<?php

namespace App\Viender\Transformers\Version1\Traits;

trait UpvotableIncludable
{
    /**
     * Include Upvotable
     *
     * @return League\Fractal\ItemResource
     */
    public function includeUpvotable($item)
    {
        $upvotable = $item->upvotable;
        $upvotableTransformer = '\App\Viender\Transformers\Version1\\' . explode('\\', $item->upvotable_type)[1] . 'Transformer';

        return $this->item($upvotable, new $upvotableTransformer);
    }
}