<?php

namespace App\Ideapool;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description',
    ];

    public function users() 
    {
        return $this->belongsToMany('App\User');
    }

    public function questions() 
    {
        return $this->morphedByMany('App\Ideapool\Question', 'taggable');
    }

    public function auctions() 
    {
        return $this->morphedByMany('App\Ideapool\Auction', 'taggable');
    }
}
