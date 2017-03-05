<?php

namespace Viender\Socialite\Transformers\Traits;

use Viender\Socialite\Transformers\CommentTransformer;

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