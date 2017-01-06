<?php

namespace Viender\Ideapool;

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
        return $this->hasMany('Viender\Ideapool\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('Viender\Ideapool\ZipCode');
    }

    public function cities() 
    {
        return $this->hasMany('Viender\Ideapool\City');
    }

    public function country() 
    {
        return $this->belongsTo('Viender\Ideapool\Country');
    }
}
