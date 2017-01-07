<?php

namespace Viender\Socialite;

use Viender\Socialite\Contracts\Post\Upvotable;
use Viender\Socialite\Contracts\Post\Commentable;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model implements Upvotable, Commentable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'question_id', 'title', 'body',
    ];
    
    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function question() 
    {
        return $this->belongsTo('Viender\Socialite\Question');
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
