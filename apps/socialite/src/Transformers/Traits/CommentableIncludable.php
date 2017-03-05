<?php

namespace Viender\Socialite\Transformers\Traits;

trait CommentableIncludable
{
    use TransformerTrait;

    /**
     * Include Comments
     *
     * @return League\Fractal\ItemResource
     */
    public function includeCommentable($item)
    {
        $commentable = $item->commentable;

        $commentableTransformer = $this->getTransformer($item->commentable_type);

        return $this->item($commentable, new $commentableTransformer);
    }
}