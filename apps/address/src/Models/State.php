<?php

namespace Viender\Address\Models;

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
        return $this->hasMany('Viender\Address\Models\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('Viender\Address\Models\ZipCode');
    }

    public function cities() 
    {
        return $this->hasMany('Viender\Address\Models\City');
    }

    public function country() 
    {
        return $this->belongsTo('Viender\Address\Models\Country');
    }
}
