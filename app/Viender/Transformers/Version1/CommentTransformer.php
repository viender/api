<?php

namespace App\Viender\Transformers\Version1;

use App\Comment;
use App\Viender\Transformers\Version1\Traits\OwnerIncludable;
use App\Viender\Transformers\Version1\Traits\CommentableIncludable;

class CommentTransformer extends Transformer
{
    use OwnerIncludable, CommentableIncludable;
    
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'owner', 'commentable',
    ];

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Comment $comment)
    {
        return [
            'id'                => (int) $comment->id,
            'body'              => $comment->body,
        ];
    }
}