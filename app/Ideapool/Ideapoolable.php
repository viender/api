<?php 

namespace App\Ideapool;

trait Ideapoolable
{
    public function questions()
    {
        return $this->hasMany('App\Ideapool\Question');
    }

    public function answers()
    {
        return $this->hasMany('App\Ideapool\Answer');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Ideapool\Tag');
    }

    public function auctions() 
    {
        return $this->hasMany('App\Ideapool\Auction');
    }

    public function bids() 
    {
        return $this->hasMany('App\Ideapool\Bid');
    }

    public function comments() 
    {
        return $this->hasMany('App\Ideapool\Comment');
    }

    public function upvotes() 
    {
        return $this->hasMany('App\Ideapool\Upvote');
    }

    public function downvotes() 
    {
        return $this->hasMany('App\Ideapool\Downvote');
    }

    public function stars() 
    {
        return $this->morphMany('App\Ideapool\Star', 'starable');
    }

    public function stared() 
    {
        return $this->hasMany('App\Ideapool\Star');
    }

    public function addresses() 
    {
        return $this->hasMany('App\Ideapool\Address');
    }
}