<?php

namespace App\Viender\Transformers\Version1;

use App\Answer;
use App\Viender\Transformers\Version1\Traits\UserIncludable;
use App\Viender\Transformers\Version1\Traits\CommentsIncludable;

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
            'upvote_count'  => $answer->upvotes()->count(),
            'links'   => [
                [
                    'rel' => 'self',
                    'uri' => url('/answers') . '/' . $answer->id,
                ],
                [
                    'rel' => 'author',
                    'uri' => url('/users') . '/' . $answer->user->username,
                ],
                [
                    'rel' => 'question',
                    'uri' => url('/questions') . '/' . $answer->question->slug,
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