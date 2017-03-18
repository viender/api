<?php

namespace Viender\Address\Models;

use Viender\Address\Street;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
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

    public function states() 
    {
        return $this->hasMany('Viender\Address\Models\State');
    }
}
