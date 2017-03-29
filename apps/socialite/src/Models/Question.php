<?php

namespace Viender\Socialite\Models;

use Viender\Topic\Traits\HasTopics;
use Viender\Socialite\Traits\HasTags;
use Viender\Socialite\Traits\HasVotes;
use Illuminate\Database\Eloquent\Model;
use Viender\Socialite\Traits\HasComments;
use Viender\Socialite\Contracts\Post\Taggable;
use Viender\Socialite\Contracts\Post\Upvotable;
use Viender\Socialite\Contracts\Post\Answerable;
use Viender\Socialite\Contracts\Post\Commentable;

class Question extends Model implements Upvotable, Commentable, Answerable, Taggable
{
    use HasComments, HasVotes, HasTags, HasTopics;

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

    public function answers() 
    {
        return $this->hasMany('Viender\Socialite\Models\Answer');
    }
}
