<?php

namespace Viender\Address\Models;

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
        return $this->hasMany('Viender\Address\Models\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('Viender\Address\Models\ZipCode');
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
