<?php

namespace Viender\Socialite\Transformers\Traits;

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