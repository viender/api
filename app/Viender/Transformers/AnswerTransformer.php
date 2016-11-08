<?php

namespace App\Viender\Transformers;

use App\Answer;
use League\Fractal\TransformerAbstract;
use App\Viender\Transformers\Traits\AuthorIncludable;

class AnswerTransformer extends TransformerAbstract
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