<?php

namespace Viender\Credential\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Credential extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'type', 'properties',
    ];

    protected $casts = [
        'properties' => 'json'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
