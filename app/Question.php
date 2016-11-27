<?php

namespace App;

use App\Contracts\Post\Upvotable;
use App\Contracts\Post\Answerable;
use App\Contracts\Post\Commentable;
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
        return $this->morphToMany('App\Tag', 'taggable');
    }

    public function answers() 
    {
        return $this->hasMany('App\Answer');
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
