<?php

namespace Viender\Socialite;

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
}
