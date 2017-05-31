<?php

namespace Viender\Social\Models;

use Illuminate\Database\Eloquent\Model;

class SocialAccount extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'provider_user_id',
        'provider',
    ];
}
