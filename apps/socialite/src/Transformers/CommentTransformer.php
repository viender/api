<?php

namespace Viender\Socialite\Transformers;

use Illuminate\Support\Collection;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Comment;
use Viender\Socialite\Models\Question;
use Viender\Socialite\Repositories\CommentsRepository;
use Viender\Address\Transformers\Traits\UserIncludable;
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
            'type'              => 'comment',
            'commentable_type'  => explode('\\', $comment->commentable_type)[count(explode('\\', $comment->commentable_type)) - 1],
            'question_title'    => $this->getQuestionTitle($comment),
            'body'              => $comment->body,
            'upvote_count'      => $comment->upvotes()->count(),
            'comment_count'     => $comment->comments()->count(),
            'upvoted'           => \Auth::user() ? $comment->upvotes()->where('user_id', \Auth::user()->id)->exists() : false,
            'downvoted'         => \Auth::user() ? $comment->downvotes()->where('user_id', \Auth::user()->id)->exists() : false,
            'deleted_at'        => $comment->deleted_at,
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

    public function getQuestionTitle($comment)
    {
        $commentable = $comment->commentable;
        $commentableClass = get_class($commentable);

        while ($commentableClass !== Question::class) {
            switch ($commentableClass) {
                case Answer::class:
                    $commentable = $commentable->question;
                    break;

                case Comment::class:
                    $commentable = $commentable->commentable;
                    break;

                default:
                    break;
            }

            $commentableClass = get_class($commentable);
        }

        return $commentableClass === Question::class ? $commentable->title : null;
    }
}
