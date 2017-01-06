<?php

namespace Viender\Ideapool;

use Viender\Ideapool\Contracts\Post\Upvotable;
use Viender\Ideapool\Contracts\Post\Commentable;
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
        return $this->belongsTo('Viender\Ideapool\Question');
    }

    public function comments() 
    {
        return $this->morphMany('Viender\Ideapool\Comment', 'commentable');
    }
    
    public function upvotes()
    {
        return $this->morphMany('Viender\Ideapool\Upvote', 'upvotable');
    }

    public function downvotes()
    {
        return $this->morphMany('Viender\Ideapool\Downvote', 'downvotable');
    }
}
