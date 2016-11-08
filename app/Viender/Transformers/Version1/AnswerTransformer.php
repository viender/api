<?php

namespace App\Viender\Transformers\Version1;

use App\Answer;
use App\Viender\Transformers\Version1\Traits\AuthorIncludable;

class AnswerTransformer extends Transformer
{
    use AuthorIncludable;

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'author'
    ];

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Answer $answer)
    {
        return [
            'id'        => (int) $answer->id,
            'title'     => $answer->title,
            'body'      => $answer->body,
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
}