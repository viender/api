<?php

namespace Viender\Ideapool;

use Viender\Ideapool\Street;
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

    public function states() 
    {
        return $this->hasMany('Viender\Ideapool\State');
    }
}
