<?php

namespace Viender\Userdata;

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
        return $this->hasMany('Viender\Userdata\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('Viender\Userdata\ZipCode');
    }

    public function cities() 
    {
        return $this->hasMany('Viender\Userdata\City');
    }

    public function country() 
    {
        return $this->belongsTo('Viender\Userdata\Country');
    }
}
