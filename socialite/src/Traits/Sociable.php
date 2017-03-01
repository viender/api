<?php 

namespace Viender\Socialite\Traits;

trait Sociable
{
    public function questions()
    {
        return $this->hasMany('Viender\Socialite\Models\Question');
    }

    public function answers()
    {
        return $this->hasMany('Viender\Socialite\Models\Answer');
    }

    public function tags()
    {
        return $this->belongsToMany('Viender\Socialite\Models\Tag');
    }

    public function comments() 
    {
        return $this->hasMany('Viender\Socialite\Models\Comment');
    }

    public function upvotes() 
    {
        return $this->hasMany('Viender\Socialite\Models\Upvote');
    }

    public function downvotes() 
    {
        return $this->hasMany('Viender\Socialite\Models\Downvote');
    }

    public function stars() 
    {
        return $this->morphMany('Viender\Socialite\Models\Star', 'starable');
    }

    public function stared() 
    {
        return $this->hasMany('Viender\Socialite\Models\Star');
    }
}