<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'question_id', 'title', 'body',
    ];

    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function tags() 
    {
        return $this->morphToMany('App\Tag', 'taggable');
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
