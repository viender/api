<?php

namespace Viender\Mytutor\Transformers;

use Viender\Mytutor\Models\Tutoring;
use Viender\Dealer\Transformers\AuctionTransformer;
use Viender\Address\Transformers\Traits\UserIncludable;

class TutoringTransformer extends Transformer
{
    use UserIncludable;

    /**
     * List of default resources to include
     *
     * @var array
     */
    protected $defaultIncludes  = [
        'auction'
    ];

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Tutoring $tutoring)
    {
        return [
            'id'                => (int) $tutoring->id,
            'title'             => $tutoring->auction->title,
            'slug'              => $tutoring->slug,
            'number_of_week'    => (int) $tutoring->number_of_week,
            'price'             => (int) $tutoring->auction->price, 
            'active'            => (boolean) $tutoring->auction->active,
            'complete'          => (boolean) $tutoring->auction->complete,
            'links'   => [
                [
                    'rel' => 'self',
                    'url' => url(route('api.viender.mytutor.tutorings.show', $tutoring->id)),
                ],
                [
                    'rel' => 'self_html',
                    'url' => url(route('web.viender.mytutor.tutorings.show', $tutoring->id)),
                ],
                [
                    'rel' => 'student',
                    'url' => url('/users/' . $tutoring->student->username),
                ],
                [
                    'rel' => 'tutor',
                    'url' => $tutoring->student->tutor ? url('/users/' . $tutoring->student->tutor) : null,
                ],
            ],
        ];
    }

    /**
     * Include Question
     *
     * @return League\Fractal\ItemResource
     */
    public function includeAuction($answer)
    {
        $auction = $answer->auction;

        return $this->item($auction, new AuctionTransformer);
    }   
}