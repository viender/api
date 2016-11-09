<?php

namespace App\Viender\Transformers\Version1\Traits;

use App\Viender\Transformers\Version1\UserTransformer;

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

        return $this->item($commentable, new $item->commentable_type);
    }
}