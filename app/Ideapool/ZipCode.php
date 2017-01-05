<?php

namespace App\Ideapool;

use Illuminate\Database\Eloquent\Model;

class ZipCode extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'country_id', 'state_id', 'city_id', 'code',
    ];

    public function addresses()
    {
        return $this->hasMany('App\Ideapool\Address');
    }
    
    public function city() 
    {
        return $this->belongsTo('App\Ideapool\City');
    }

    public function state() 
    {
        return $this->belongsTo('App\Ideapool\State');
    }

    public function country() 
    {
        return $this->belongsTo('App\Ideapool\Country');
    }
}
