<?php 

namespace Viender\Dealer;

trait Dealerable
{
    public function auctions()
    {
        return $this->hasMany('Viender\Dealer\Auction');
    }

    public function bids() 
    {
        return $this->hasMany('Viender\Dealer\Bid');
    }
}