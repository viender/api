<?php

namespace Viender\Socialite;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description',
    ];

    public function users() 
    {
        return $this->belongsToMany('App\User');
    }

    public function questions() 
    {
        return $this->morphedByMany('Viender\Socialite\Question', 'taggable');
    }

    public function auctions() 
    {
        return $this->morphedByMany('Viender\Dealer\Auction', 'taggable');
    }
}
