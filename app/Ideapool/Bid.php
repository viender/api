<?php

namespace App\Ideapool;

use Illuminate\Database\Eloquent\Model;

class Bid extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'auction_id', 'title', 'body', 'offered_price',
    ];

    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function Auction() 
    {
        return $this->belongsTo('App\Ideapool\Auction');
    }
}
