<?php

namespace App;

use App\Street;
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
        return $this->hasMany('App\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('App\ZipCode');
    }

    public function cities() 
    {
        return $this->hasMany('App\City');
    }

    public function states() 
    {
        return $this->hasMany('App\State');
    }
}
