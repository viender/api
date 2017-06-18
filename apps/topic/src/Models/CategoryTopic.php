<?php

namespace Viender\Topic\Models;

use Laravel\Scout\Searchable;
use Viender\Topic\Models\Topic;
use Viender\Topic\Models\Category;
use Illuminate\Database\Eloquent\Model;

class CategoryTopic extends Model
{
	use Searchable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'category_topic';

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $array = [
            'category_id' => $this->category_id,
            'topic_name'  => $this->topic->name,
        ];

        return $array;
    }

    public function Category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function topic()
    {
        return $this->belongsTo(Topic::class, 'topic_id');
    }
}
