<?php

namespace App\Viender\Transformers\Version1\Traits;

trait CommentableIncludable
{
    use TransformerTrait;

    /**
     * Include Commentable
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