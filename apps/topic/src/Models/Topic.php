<?php

namespace Viender\Topic\Models;

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
        'slug',
        'name',
        'description',
    	'thumbnail',
    ];

    protected $appends = array('followed');

    public function getFollowedAttribute()
    {
        if (! \Auth::user()) return false;

        return $this->followers()->where('follower_id', \Auth::user()->id)->exists();
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
        return $this->morphedByMany('Viender\Socialite\Models\Answer', 'topicable');
    }
}
