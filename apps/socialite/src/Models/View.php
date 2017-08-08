<?php

namespace Viender\Socialite\Models;

use Illuminate\Database\Eloquent\Model;

class View extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'answer_id', 'count',
    ];
}
