<?php

namespace Viender\Socialite\Models;

use Illuminate\Database\Eloquent\Model;

class Downvote extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
    ];

    public function user() 
    {
        return $this->belongsTo('App\User');
    }
    
    public function downvotable()
    {
        return $this->morphTo();
    }
}
