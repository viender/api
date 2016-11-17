<?php

namespace App\Viender\Transformers\Version1;

use App\Comment;
use App\Viender\Transformers\Version1\Traits\UserIncludable;
use App\Viender\Transformers\Version1\Traits\CommentableIncludable;

class CommentTransformer extends Transformer
{
    use UserIncludable, CommentableIncludable;
    
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
            'upvote_count'      => $comment->upvotes()->count(),
            'comment_count'     => $comment->comments()->count(),
            'links'   => [
                [
                    'rel' => 'comments',
                    'url' => url('/comments') . '/' . $comment->id . '/comments',
                ],
            ],
        ];
    }
}