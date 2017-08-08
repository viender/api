<?php

namespace Viender\Socialite\Transformers;

use Viender\Socialite\Models\Answer;
use Illuminate\Support\Facades\Auth;
use Viender\Address\Transformers\Traits\UserIncludable;
use Viender\Socialite\Transformers\Traits\CommentsIncludable;

class AnswerWithQuestionTransformer extends Transformer
{
    use UserIncludable, CommentsIncludable;

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'question',
    ];

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
        if (isset($_GET['only']) ? $_GET['only'] == 'body' : false) {
            return [
                'body'      => $answer->body,
            ];
        }

        return [
            'id'            => (int) $answer->id,
            'type'          => 'answer',
            'title'         => $answer->title,
            'question_title'=> $answer->question ? $answer->question->title : 'Deleted Question',
            'body'          => $answer->body,
            'upvoted'       => \Auth::user() ? $answer->upvotes()->where('user_id', \Auth::user()->id)->exists() : false,
            'downvoted'       => \Auth::user() ? $answer->downvotes()->where('user_id', \Auth::user()->id)->exists() : false,
            'upvote_count'  => $answer->upvotes()->count(),
            'comment_count' => $answer->comments()->count(),
            'view_count'    => $answer->viewCount(),
            'deleted_at'    => $answer->deleted_at,
            'links'   => [
                [
                    'rel' => 'self',
                    'url' => $answer->question ? (route('api.viender.socialite.questions.answers.show', [$answer->question, $answer->slug])) : (route('api.viender.socialite.answers.show', $answer)),
                ],
                [
                    'rel' => 'self_html',
                    'url' => $answer->question ? route('web.viender.socialite.pages.answerShow', [$answer->question->slug, $answer->slug]) : null,
                ],
                [
                    'rel' => 'author',
                    'url' => route('api.viender.core.users.show', $answer->user->username),
                ],
                [
                    'rel' => 'question',
                    'url' => $answer->question ? route('api.viender.socialite.answers.show', $answer->question->slug) : null,
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
