<?php

namespace Viender\Campaign\Models;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'source',
    ];
}
