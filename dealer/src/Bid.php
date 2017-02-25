<?php

namespace Viender\Dealer;

use Illuminate\Database\Eloquent\Model;

class Bid extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'auction_id', 'title', 'proposal', 'offered_price',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'viender_dealer_bids';

    public function bidder() 
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function Auction() 
    {
        return $this->belongsTo('Viender\Dealer\Auction');
    }
}
