<?php

namespace App\Ideapool;

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
        return $this->hasMany('App\Ideapool\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('App\Ideapool\ZipCode');
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
