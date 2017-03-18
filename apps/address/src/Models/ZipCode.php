<?php

namespace Viender\Address\Models;

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
        return $this->hasMany('Viender\Address\Models\Address');
    }
    
    public function city() 
    {
        return $this->belongsTo('Viender\Address\Models\City');
    }

    public function state() 
    {
        return $this->belongsTo('Viender\Address\Models\State');
    }

    public function country() 
    {
        return $this->belongsTo('Viender\Address\Models\Country');
    }
}
