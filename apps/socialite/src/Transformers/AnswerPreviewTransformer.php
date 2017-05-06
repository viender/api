<?php

namespace Viender\Socialite\Transformers;

use Illuminate\Support\Facades\Auth;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Repositories\AnswersRepository;
use Viender\Address\Transformers\Traits\UserIncludable;
use Viender\Socialite\Transformers\Traits\CommentsIncludable;

class AnswerPreviewTransformer extends Transformer
{
    use UserIncludable, CommentsIncludable;

    protected $answers;

    function __construct(AnswersRepository $answers)
    {
        $this->answers = $answers;
    }
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
            'type'          => 'answer',
            'title'         => $answer->title,
            'preview'       => $this->answers->getPreview($answer),
            'preview_image' => $this->answers->getPreviewImage($answer),
            'upvoted'       => \Auth::user() ? $answer->upvotes()->where('user_id', \Auth::user()->id)->exists() : false,
            'downvoted'       => \Auth::user() ? $answer->downvotes()->where('user_id', \Auth::user()->id)->exists() : false,
            'upvote_count'  => $answer->upvotes()->count(),
            'comment_count'  => $answer->comments()->count(),
            'deleted_at'    => $answer->deleted_at,
            'links'   => [
                [
                    'rel' => 'self',
                    'url' => route('api.viender.socialite.questions.answers.show', [$answer->question, $answer->slug]),
                ],
                [
                    'rel' => 'self_html',
                    'url' => route('web.viender.socialite.pages.answerShow', [$answer->question->slug, $answer->slug]),
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
