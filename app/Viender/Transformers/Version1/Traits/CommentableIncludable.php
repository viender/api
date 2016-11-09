<?php

namespace App\Viender\Transformers\Version1\Traits;

trait CommentableIncludable
{
    /**
     * Include Commentable
     *
     * @return League\Fractal\ItemResource
     */
    public function includeCommentable($item)
    {
        $commentable = $item->commentable;
        $commentableTransformer = '\App\Viender\Transformers\Version1\\' . explode('\\', $item->commentable_type)[1] . 'Transformer';

        return $this->item($commentable, new $commentableTransformer);
    }
}