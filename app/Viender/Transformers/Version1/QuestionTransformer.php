<?php

namespace App\Viender\Transformers\Version1;

use App\Question;
use App\Viender\Transformers\Version1\AnswerTransformer;
use App\Viender\Transformers\Version1\Traits\UserIncludable;
use App\Viender\Transformers\Version1\Traits\CommentsIncludable;

class QuestionTransformer extends Transformer
{
    use UserIncludable, CommentsIncludable;

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'owner', 'answers', 'comments',
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

    /**
     * Include Answers
     *
     * @return League\Fractal\ItemResource
     */
    public function includeAnswers($item)
    {
        $answers = $item->answers;

        return $this->collection($answers, new AnswerTransformer, 'answers');
    }
}