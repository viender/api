<?php

namespace App\Viender\Transformers\Version1\Traits;

trait DownvotableIncludable
{
    /**
     * Include Downvotable
     *
     * @return League\Fractal\ItemResource
     */
    public function includeDownvotable($item)
    {
        $downvotable = $item->downvotable;
        $downvotableTransformer = '\App\Viender\Transformers\Version1\\' . explode('\\', $item->downvotable_type)[1] . 'Transformer';

        return $this->item($downvotable, new $downvotableTransformer);
    }
}