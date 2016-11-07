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

    public function streets()
    {
        return Street::whereHas('city', function($q) { 
            $q->where('id', $this->id);
        });
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
