<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'country_id', 'state_id', 'name',
    ];

    public function addresses()
    {
        return $this->hasMany('App\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('App\ZipCode');
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
