<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Star extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'starable_id', 'starable_type', 'count',
    ];

    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function starable()
    {
        return $this->morphTo();
    }
}
