<?php

namespace Viender\Topic\Models;

use Laravel\Scout\Searchable;
use Viender\Topic\Models\Topic;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
	use Searchable, SoftDeletes;

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
    ];

    public function topics()
    {
        return $this->belongsToMany(Topic::class);
    }
}
