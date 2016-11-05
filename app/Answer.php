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
