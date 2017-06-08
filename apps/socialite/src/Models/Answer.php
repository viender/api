<?php

namespace Viender\Socialite\Models;

use Laravel\Scout\Searchable;
use Viender\Topic\Traits\HasTopics;
use Viender\Socialite\Traits\HasVotes;
use Illuminate\Database\Eloquent\Model;
use Viender\Socialite\Traits\HasComments;
use Illuminate\Database\Eloquent\SoftDeletes;
use Viender\Socialite\Contracts\Post\Upvotable;
use Viender\Socialite\Contracts\Post\Commentable;
use Viender\Credential\Traits\BelongsToCredentials;
use Viender\Socialite\Transformers\AnswerTransformer;

class Answer extends Model implements Upvotable, Commentable
{
    use HasComments, HasVotes, HasTopics, Searchable, SoftDeletes, BelongsToCredentials;

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'slug', 'question_id', 'title', 'body', 'credential_id',
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

    public function getTopicsAttribute($value)
    {
        return $this->morphToMany('Viender\Topic\Models\Topic', 'topicable');
    }

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $transformer = new AnswerTransformer();

        $array = [
            'id'        => $this->id,
            'title'     => $this->title,
            'body'      => $this->body,
            'topics'    => $this->question()->first()->topics()->get()->toArray(),
        ];

        return $array;
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function question()
    {
        return $this->belongsTo('Viender\Socialite\Models\Question');
    }

    public function credential()
    {
        return $this->belongsTo('Viender\Credential\Models\Credential');
    }
}
