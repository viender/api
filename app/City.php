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

    public function streets()
    {
        return $this->hasMany('App\Steet');
    }

    public function state() 
    {
        return $this->belongsTo('App\State');
    }

    public function country() 
    {
        return $this->state()->country();
    }
}
