<?php

namespace Viender\Profile;

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
        return $this->hasMany('Viender\Profile\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('Viender\Profile\ZipCode');
    }

    public function cities() 
    {
        return $this->hasMany('Viender\Profile\City');
    }

    public function country() 
    {
        return $this->belongsTo('Viender\Profile\Country');
    }
}
