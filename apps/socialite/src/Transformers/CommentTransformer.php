<?php

namespace Viender\Socialite\Transformers;

use Viender\Socialite\Models\Comment;
use Illuminate\Support\Collection;
use Viender\Socialite\Repositories\CommentsRepository;
use Viender\Profile\Transformers\Traits\UserIncludable;
use Viender\Socialite\Transformers\Traits\CommentableIncludable;

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
            'upvoted'       => \Auth::user() ? $comment->upvotes()->where('user_id', \Auth::user()->id)->exists() : false,
            'downvoted'       => \Auth::user() ? $comment->downvotes()->where('user_id', \Auth::user()->id)->exists() : false,
            'links'   => [
                [
                    'rel' => 'self',
                    'url' => route('api.viender.socialite.comments.show', $comment->id),
                ],
                [
                    'rel' => 'comments',
                    'url' => route('api.viender.socialite.comments.comments.index', $comment->id),
                ],
                [
                    'rel' => 'upvotes',
                    'url' => route('api.viender.socialite.comments.upvotes.index', $comment->id)
                ],
                [
                    'rel' => 'downvotes',
                    'url' => route('api.viender.socialite.comments.downvotes.index', $comment->id),
                ],
            ],
        ];
    }
}