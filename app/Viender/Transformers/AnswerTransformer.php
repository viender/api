<?php

namespace App\Viender\Transformers;

use App\Answer;
use League\Fractal\TransformerAbstract;

class AnswerTransformer extends TransformerAbstract
{
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

    /**
     * Include Author
     *
     * @return League\Fractal\ItemResource
     */
    public function includeAuthor(Answer $answer)
    {
        $author = $answer->user;

        return $this->item($author, new UserTransformer);
    }

}