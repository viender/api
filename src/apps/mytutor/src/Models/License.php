<?php

namespace Viender\Mytutor\Models;

use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['valid_to'];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'viender_mytutor_licenses';
    
    public function user() 
    {
        return $this->belongsTo('App\User');
    }
}
