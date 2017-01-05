<?php

namespace App\Ideapool;

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

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }
    
    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function bids() 
    {
        return $this->hasMany('App\Ideapool\Bid');
    }

    public function tags() 
    {
        return $this->morphToMany('App\Ideapool\Tag', 'taggable');
    }
}
