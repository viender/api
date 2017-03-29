<?php

namespace Viender\Follow\Models;

use Illuminate\Database\Eloquent\Model;

class Follow extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    	'followee_id',
        'followee_type',
    ];

    public function followee()
    {
    	return $this->morphTo();
    }

    public function follower()
    {
        return $this->morphTo();
    }
}
