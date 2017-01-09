<?php

namespace Viender\Socialite;

use Viender\Socialite\Contracts\Post\Upvotable;
use Viender\Socialite\Contracts\Post\Answerable;
use Viender\Socialite\Contracts\Post\Commentable;
use Illuminate\Database\Eloquent\Model;

class Question extends Model implements Upvotable, Commentable, Answerable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'body',
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

    public function tags() 
    {
        return $this->morphToMany('Viender\Socialite\Tag', 'taggable');
    }

    public function answers() 
    {
        return $this->hasMany('Viender\Socialite\Answer');
    }

    public function comments() 
    {
        return $this->morphMany('Viender\Socialite\Comment', 'commentable');
    }

    public function upvotes()
    {
        return $this->morphMany('Viender\Socialite\Upvote', 'upvotable');
    }
    
    public function downvotes()
    {
        return $this->morphMany('Viender\Socialite\Downvote', 'downvotable');
    }    
}
