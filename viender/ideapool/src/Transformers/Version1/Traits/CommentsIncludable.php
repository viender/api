<?php

namespace Viender\Ideapool\Transformers\Version1\Traits;

use Viender\Ideapool\Transformers\Version1\CommentTransformer;

trait CommentsIncludable
{
    use TransformerTrait;

    /**
     * Include Commentable
     *
     * @return League\Fractal\ItemResource
     */
    public function includeComments($item)
    {
        $comments = $item->comments;

        return $this->collection($comments, new CommentTransformer, 'comments');
    }
}