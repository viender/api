<?php

namespace Viender\Follow\Models;

use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    	
    ];

    public function followed()
    {
    	return $this->belongsTo('App\User', 'user_id');
    }
}
