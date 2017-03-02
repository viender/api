<?php

namespace Viender\Dealer\Transformers;

use Viender\Dealer\Bid;
use Viender\Profile\Transformers\Traits\UserIncludable;

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
            'proposal'      => $bid->proposal,
            'offered_price' => (int) $bid->offered_price, 
            'deal'          => (boolean) $bid->deal,
            'links'         => [
                [
                    'rel' => 'self',
                    'url' => url('/bids') . '/' . $bid->id,
                ],
                [
                    'rel' => 'author',
                    'url' => url('/users') . '/' . $bid->bidder->username,
                ],
                [
                    'rel' => 'auction',
                    'url' => url('/auctions') . '/' . $bid->auction->slug,
                ],
            ],
        ];
    }
}