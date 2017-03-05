<?php

namespace Viender\Socialite\Transformers;

use Viender\Socialite\Models\Answer;
use Illuminate\Support\Facades\Auth;
use Viender\Profile\Transformers\Traits\UserIncludable;
use Viender\Socialite\Transformers\Traits\CommentsIncludable;

class AnswerTransformer extends Transformer
{
    use UserIncludable, CommentsIncludable;

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'owner', 'question', 'comments',
    ];

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Answer $answer)
    {
        return [
            'id'            => (int) $answer->id,
            'title'         => $answer->title,
            'body'          => $answer->body,
            'upvoted'       => \Auth::user() ? $answer->upvotes()->where('user_id', \Auth::user()->id)->exists() : false,
            'downvoted'       => \Auth::user() ? $answer->downvotes()->where('user_id', \Auth::user()->id)->exists() : false,
            'upvote_count'  => $answer->upvotes()->count(),
            'comment_count'  => $answer->comments()->count(),
            'links'   => [
                [
                    'rel' => 'self',
                    'url' => route('api.viender.socialite.answers.show', $answer->id),
                ],
                [
                    'rel' => 'self_html',
                    'url' => route('web.viender.socialite.pages.questions.answer', [$answer->question->slug, $answer->id]),
                ],                
                [
                    'rel' => 'author',
                    'url' => route('api.viender.core.users.show', $answer->user->username),
                ],
                [
                    'rel' => 'question',
                    'url' => route('api.viender.socialite.answers.show', $answer->question->slug),
                ],
                [
                    'rel' => 'comments',
                    'url' => route('api.viender.socialite.answers.comments.index', $answer->id),
                ],
                [
                    'rel' => 'upvotes',
                    'url' => route('api.viender.socialite.answers.upvotes.index', $answer->id),
                ],
                [
                    'rel' => 'downvotes',
                    'url' => route('api.viender.socialite.answers.downvotes.index', $answer->id),
                ],
            ],
        ];
    }

    /**
     * Include Question
     *
     * @return League\Fractal\ItemResource
     */
    public function includeQuestion($answer)
    {
        $question = $answer->question;

        return $this->item($question, new QuestionTransformer);
    }    
}