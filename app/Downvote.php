<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Downvote extends Model
{
    public function user() 
    {
        return $this->belongsTo('App\User');
    }
    
    public function downvotable()
    {
        return $this->morphTo();
    }
}
