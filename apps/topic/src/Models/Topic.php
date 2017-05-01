<?php

namespace Viender\Topic\Models;

use Laravel\Scout\Searchable;
use Viender\Socialite\Models\Answer;
use Viender\Follow\Traits\Followable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Viender\Topic\Transformers\TopicTransformer;

class Topic extends Model
{
	use Followable, Searchable, SoftDeletes;

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'parent_id',
        'slug',
        'name',
        'class',
        'description',
        'thumbnail',
        'thumbnail_medium',
    	'thumbnail_large',
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
        $transformer = new TopicTransformer();

        $array = [
            'id'            => $this->id,
            'parent'     => $this->parent ? $this->parent ->toArray() : [],
            'name'          => $this->name,
            'description'   => $this->description,
        ];

        return $array;
    }

    protected $appends = array('followed');

    public function getFollowedAttribute()
    {
        if (! \Auth::user()) return false;

        return $this->followers()->where('user_id', \Auth::user()->id)->exists();
    }

    public function parent()
    {
    	return $this->belongsTo('Viender\Topic\Models\Topic');
    }

    public function questions()
    {
        return $this->morphedByMany('Viender\Socialite\Models\Question', 'topicable');
    }

    public function answers()
    {
        $slug = $this->slug;

        return Answer::whereHas('question', function($q) use ($slug) {
            $q->whereHas('topics', function($q) use ($slug) {
                $q->where('slug', $slug);
            });
        });
    }
}
