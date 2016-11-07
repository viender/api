<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'state_id', 'name',
    ];

    public function addresses()
    {
        return $this->hasMany('App\Address');
    }

    public function streets()
    {
        return $this->hasMany('App\Street');
    }

    public function state() 
    {
        return $this->belongsTo('App\State');
    }

    public function country() 
    {
        return $this->state()->first()->country();
    }
}
