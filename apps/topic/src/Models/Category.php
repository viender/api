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

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $array = [
            'id'            => $this->id,
            'name'          => $this->name,
            'description'   => $this->description,
        ];

        return $array;
    }

    public function topics()
    {
        return $this->belongsToMany(Topic::class);
    }
}
