<?php

namespace Viender\Topic\Transformers;

use Viender\Topic\Models\Category;

class CategoryTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Category $category)
    {
        return [
            'id'            => $category->id,
            'name'          => $category->name,
            'type'          => 'category',
        ];
    }
}
