<?php

namespace Viender\Userdata;

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
        return $this->hasMany('Viender\Userdata\Address');
    }
    
    public function city() 
    {
        return $this->belongsTo('Viender\Userdata\City');
    }

    public function state() 
    {
        return $this->belongsTo('Viender\Userdata\State');
    }

    public function country() 
    {
        return $this->belongsTo('Viender\Userdata\Country');
    }
}
