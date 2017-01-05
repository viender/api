<?php

namespace App\Ideapool;

use App\Ideapool\Contracts\Post\Upvotable;
use App\Ideapool\Contracts\Post\Answerable;
use App\Ideapool\Contracts\Post\Commentable;
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
        return $this->morphToMany('App\Ideapool\Tag', 'taggable');
    }

    public function answers() 
    {
        return $this->hasMany('App\Ideapool\Answer');
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
