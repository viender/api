<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Street extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'city_id', 'name',
    ];

    public function addresses()
    {
        return $this->hasMany('App\Address');
    }
    
    public function city() 
    {
        return $this->belongsTo('App\City');
    }

    public function state() 
    {
        return $this->city()->state();
    }

    public function country() 
    {
        return $this->state()->country();
    }
}
