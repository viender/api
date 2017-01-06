<?php

namespace Viender\Ideapool;

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
        return $this->hasMany('Viender\Ideapool\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('Viender\Ideapool\ZipCode');
    }

    public function state() 
    {
        return $this->belongsTo('Viender\Ideapool\State');
    }

    public function country() 
    {
        return $this->belongsTo('Viender\Ideapool\Country');
    }
}
