<?php

namespace Viender\Socialite\Transformers\Version1;

use Viender\Dealer\Auction;
use Viender\Userdata\Transformers\Version1\Traits\UserIncludable;

class AuctionTransformer extends Transformer
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
    public function transform(Auction $auction)
    {
        return [
            'id'        => (int) $auction->id,
            'title'     => $auction->title,
            'body'      => $auction->body,
            'price'     => $auction->price, 
            'status'    => $auction->status,
            'links'   => [
                [
                    'rel' => 'self',
                    'url' => url('/auctions') . '/' . $auction->slug,
                ],
                [
                    'rel' => 'author',
                    'url' => url('/users') . '/' . $auction->user->username,
                ],
            ],
        ];
    }
}