<?php

namespace App\Viender\Transformers\Version1;

use App\Question;
use App\Viender\Transformers\Version1\Traits\UserIncludable;

class QuestionTransformer extends Transformer
{
    use UserIncludable;
    
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'owner',
    ];
    
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Question $question)
    {
        return [
            'id'        => (int) $question->id,
            'title'     => $question->title,
            'body'      => $question->body,
            'links'   => [
                [
                    'rel' => 'self',
                    'uri' => url('/questions') . '/' . $question->slug,
                ],
                [
                    'rel' => 'author',
                    'uri' => url('/users') . '/' . $question->user->username,
                ],
            ]            
        ];
    }
}