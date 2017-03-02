<?php

namespace Viender\Dealer;

use Viender\Socialite\Traits\HasTags;
use Illuminate\Database\Eloquent\Model;
use Viender\Socialite\Contracts\Post\Taggable;

class Auction extends Model implements Taggable
{
    use HasTags;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'body', 'price', 'active', 'slug'
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'viender_dealer_auctions';

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function auctionable()
    {
        return $this->morphTo();
    }
    
    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function bids() 
    {
        return $this->hasMany('Viender\Dealer\Bid');
    }
}
