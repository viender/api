<?php

namespace Viender\Userdata;

use Viender\Userdata\Street;
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

    public function states() 
    {
        return $this->hasMany('Viender\Userdata\State');
    }
}
