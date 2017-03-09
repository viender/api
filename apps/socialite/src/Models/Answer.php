<?php

namespace Viender\Socialite\Models;

use Viender\Socialite\Traits\HasVotes;
use Viender\Socialite\Traits\HasComments;
use Illuminate\Database\Eloquent\Model;
use Viender\Socialite\Contracts\Post\Upvotable;
use Viender\Socialite\Contracts\Post\Commentable;

class Answer extends Model implements Upvotable, Commentable
{
    use HasComments, HasVotes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'slug', 'question_id', 'title', 'body',
    ];

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'id';
    }

    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function question() 
    {
        return $this->belongsTo('Viender\Socialite\Models\Question');
    }
}
