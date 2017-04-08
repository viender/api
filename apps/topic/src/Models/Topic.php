<?php

namespace Viender\Topic\Models;

use Viender\Socialite\Models\Answer;
use Viender\Follow\Traits\Followable;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
	use Followable;

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
