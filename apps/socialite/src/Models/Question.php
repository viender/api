<?php

namespace Viender\Socialite\Models;

use Laravel\Scout\Searchable;
use Viender\Topic\Traits\HasTopics;
use Viender\Socialite\Traits\HasTags;
use Viender\Socialite\Traits\HasVotes;
use Illuminate\Database\Eloquent\Model;
use Viender\Socialite\Traits\HasComments;
use Illuminate\Database\Eloquent\SoftDeletes;
use Viender\Socialite\Contracts\Post\Taggable;
use Viender\Socialite\Contracts\Post\Upvotable;
use Viender\Socialite\Contracts\Post\Answerable;
use Viender\Socialite\Contracts\Post\Commentable;
use Viender\Socialite\Transformers\QuestionTransformer;

class Question extends Model implements Upvotable, Commentable, Answerable, Taggable
{
    use HasComments, HasVotes, HasTags, HasTopics, Searchable, SoftDeletes;

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'body', 'slug',
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

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $transformer = new QuestionTransformer();

        $array = [
            'id'        => $this->id,
            'title'     => $this->title,
            'body'      => $this->body,
            'topics'    => $this->topics()->get()->toArray(),
        ];

        return $array;
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
