<?php

namespace Viender\Ideapool\Transformers\Version1;

use Viender\Ideapool\Comment;
use Illuminate\Support\Collection;
use Viender\Ideapool\Repositories\CommentsRepository;
use Viender\Ideapool\Transformers\Version1\Traits\UserIncludable;
use Viender\Ideapool\Transformers\Version1\Traits\CommentableIncludable;

class CommentTransformer extends Transformer
{
    use UserIncludable, CommentableIncludable;

    private $comments;

    public function __construct()
    {
        $this->comments = new CommentsRepository(app(), Collection::make());
    }
    
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
            'commentable_type'  => $this->comments->getCommentableType($comment),
            'links'   => [
                [
                    'rel' => 'self',
                    'url' => url('/comments') . '/' . $comment->id,
                ],
                [
                    'rel' => 'commentable',
                    'url' => $this->comments->getCommentableUrl($comment),
                ],
                [
                    'rel' => 'comments',
                    'url' => url('/comments') . '/' . $comment->id . '/comments',
                ],
            ],
        ];
    }
}