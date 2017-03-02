<?php 

namespace Viender\Dealer;

trait Auctionable
{
    public function auction()
    {
        return $this->morphOne('Viender\Dealer\Auction', 'auctionable');
    }
}