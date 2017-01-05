<?php

namespace App\Ideapool;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'country_id', 'name',
    ];

    public function addresses()
    {
        return $this->hasMany('App\Ideapool\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('App\Ideapool\ZipCode');
    }

    public function cities() 
    {
        return $this->hasMany('App\Ideapool\City');
    }

    public function country() 
    {
        return $this->belongsTo('App\Ideapool\Country');
    }
}
