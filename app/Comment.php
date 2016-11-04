<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'commentable_id', 'commentable_type', 'body',
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
        return $this->morphMany('App\Comment', 'commentable');
    }
    
    public function upvotes()
    {
        return $this->morphMany('App\Upvote', 'upvotable');
    }

    public function downvotes()
    {
        return $this->morphMany('App\Downvote', 'downvotable');
    }
}
