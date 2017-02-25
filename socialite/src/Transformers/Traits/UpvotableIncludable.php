<?php

namespace Viender\Socialite\Transformers\Traits;

trait UpvotableIncludable
{
    use TransformerTrait;

    /**
     * Include Upvotable
     *
     * @return League\Fractal\ItemResource
     */
    public function includeUpvotable($item)
    {
        $upvotable = $item->upvotable;

        $upvotableTransformer = $this->getTransformer($item->upvotable_type);

        return $this->item($upvotable, new $upvotableTransformer);
    }
}