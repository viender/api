<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'country_id', 'state_id', 'city_id', 'street_id'
    ];

    public function street() 
    {
        return $this->belongsTo('App\Street');
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
