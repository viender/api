<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upvote extends Model
{
    public function user() 
    {
        return $this->belongsTo('App\User');
    }
    
    public function upvotable() 
    {
        return $this->morphTo();
    }
}
