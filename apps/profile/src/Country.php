<?php

namespace Viender\Profile;

use Viender\Profile\Street;
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

    public function states() 
    {
        return $this->hasMany('Viender\Profile\State');
    }
}
