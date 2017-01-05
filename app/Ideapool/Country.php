<?php

namespace App\Ideapool;

use App\Ideapool\Street;
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
        return $this->hasMany('App\Ideapool\Address');
    }

    public function zipCodes()
    {
        return $this->hasMany('App\Ideapool\ZipCode');
    }

    public function cities() 
    {
        return $this->hasMany('App\Ideapool\City');
    }

    public function states() 
    {
        return $this->hasMany('App\Ideapool\State');
    }
}
