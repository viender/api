<?php

namespace App;

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
        return $this->hasMany('App\Address');
    }
    
    public function city() 
    {
        return $this->belongsTo('App\City');
    }

    public function state() 
    {
        return $this->belongsTo('App\State');
    }

    public function country() 
    {
        return $this->belongsTo('App\Country');
    }
}
