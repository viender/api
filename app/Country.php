<?php

namespace App;

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

    public function streets()
    {
        $this->hasManyThrough('App\City', 'App\State')->hasManyThrough('App\Street', 'App\City');
    }

    public function cities() 
    {
        return $this->hasManyThrough('App\City', 'App\State');
    }

    public function states() 
    {
        return $this->hasMany('App\State');
    }
}
