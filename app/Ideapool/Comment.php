<?php

namespace App\Ideapool;

use App\Ideapool\Contracts\Post\Upvotable;
use App\Ideapool\Contracts\Post\Commentable;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model implements Upvotable, Commentable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'commentable_id', 'commentable_type', 'body',
    ];

    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function commentable() 
    {
        return $this->morphTo();
    }

    public function comments()
    {
        return $this->morphMany('App\Ideapool\Comment', 'commentable');
    }
    
    public function upvotes()
    {
        return $this->morphMany('App\Ideapool\Upvote', 'upvotable');
    }

    public function downvotes()
    {
        return $this->morphMany('App\Ideapool\Downvote', 'downvotable');
    }
}
