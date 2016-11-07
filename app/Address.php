<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'street_id',
    ];

    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function street() 
    {
        return $this->belongsTo('App\Street');
    }

    public function city() 
    {
        return $this->street->city();
    }

    public function state() 
    {
        return $this->street->city->state();
    }

    public function country() 
    {
        return $this->street->city->state->country();
    }
}
