<?php

namespace Viender\Role\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    public function roles() {
        return $this->belongsToMany(User::class);
    }
}
