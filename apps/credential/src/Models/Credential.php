<?php

namespace Viender\Credential\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Credential extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'body',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
