<?php 

namespace Viender\Ideapool;

trait Ideapoolable
{
    public function questions()
    {
        return $this->hasMany('Viender\Ideapool\Question');
    }

    public function answers()
    {
        return $this->hasMany('Viender\Ideapool\Answer');
    }

    public function tags()
    {
        return $this->belongsToMany('Viender\Ideapool\Tag');
    }

    public function auctions() 
    {
        return $this->hasMany('Viender\Ideapool\Auction');
    }

    public function bids() 
    {
        return $this->hasMany('Viender\Ideapool\Bid');
    }

    public function comments() 
    {
        return $this->hasMany('Viender\Ideapool\Comment');
    }

    public function upvotes() 
    {
        return $this->hasMany('Viender\Ideapool\Upvote');
    }

    public function downvotes() 
    {
        return $this->hasMany('Viender\Ideapool\Downvote');
    }

    public function stars() 
    {
        return $this->morphMany('Viender\Ideapool\Star', 'starable');
    }

    public function stared() 
    {
        return $this->hasMany('Viender\Ideapool\Star');
    }
}