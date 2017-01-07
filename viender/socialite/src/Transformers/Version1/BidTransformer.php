<?php

namespace Viender\Socialite\Transformers\Version1;

use Viender\Socialite\Bid;
use Viender\Userdata\Transformers\Version1\Traits\UserIncludable;

class BidTransformer extends Transformer
{
    use UserIncludable;

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'owner'
    ];

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Bid $bid)
    {
        return [
            'id'            => (int) $bid->id,
            'title'         => $bid->title,
            'body'          => $bid->body,
            'offered_price' => (int) $bid->offered_price, 
            'deal'          => (boolean) $bid->deal,
            'links'         => [
                [
                    'rel' => 'self',
                    'url' => url('/bids') . '/' . $bid->id,
                ],
                [
                    'rel' => 'author',
                    'url' => url('/users') . '/' . $bid->user->username,
                ],
                [
                    'rel' => 'auction',
                    'url' => url('/auctions') . '/' . $bid->auction->slug,
                ],
            ],
        ];
    }
}