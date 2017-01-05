<?php

namespace App\Ideapool\Viender\Transformers\Version1\Traits;

trait DownvotableIncludable
{
    use TransformerTrait;
    
    /**
     * Include Downvotable
     *
     * @return League\Fractal\ItemResource
     */
    public function includeDownvotable($item)
    {
        $downvotable = $item->downvotable;

        $downvotableTransformer = $this->getTransformer($item->downvotable_type);

        return $this->item($downvotable, new $downvotableTransformer);
    }
}