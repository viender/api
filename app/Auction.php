<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Auction extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'body', 'price', 'status',
    ];

    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function bids() 
    {
        return $this->hasMany('App\Bid');
    }

    public function tags() 
    {
        return $this->morphToMany('App\Tag', 'taggable');
    }
}
