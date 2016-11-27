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
            'id'            => (int) $question->id,
            'slug'          => $question->slug,
            'title'         => $question->title,
            'body'          => $question->body,
            'upvote_count'  => $question->upvotes()->count(),
            'comment_count' => $question->comments()->count(),
            'links'   => [
                [
                    'rel' => 'self',
                    'url' => url('questions/' . $question->slug),
                ],
                [
                    'rel' => 'author',
                    'url' => url('users/' . $question->user->username),
                ],
                [
                    'rel' => 'answers',
                    'url' => url('questions/' . $question->slug . '/answers'),
                ],
                [
                    'rel' => 'comments',
                    'url' => url('questions/' . $question->slug . '/comments'),
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