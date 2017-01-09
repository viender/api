<?php 

namespace Viender\Socialite;

trait Sociable
{
    public function questions()
    {
        return $this->hasMany('Viender\Socialite\Question');
    }

    public function answers()
    {
        return $this->hasMany('Viender\Socialite\Answer');
    }

    public function tags()
    {
        return $this->belongsToMany('Viender\Socialite\Tag');
    }

    public function comments() 
    {
        return $this->hasMany('Viender\Socialite\Comment');
    }

    public function upvotes() 
    {
        return $this->hasMany('Viender\Socialite\Upvote');
    }

    public function downvotes() 
    {
        return $this->hasMany('Viender\Socialite\Downvote');
    }

    public function stars() 
    {
        return $this->morphMany('Viender\Socialite\Star', 'starable');
    }

    public function stared() 
    {
        return $this->hasMany('Viender\Socialite\Star');
    }
}