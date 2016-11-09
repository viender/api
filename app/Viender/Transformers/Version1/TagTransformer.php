<?php

namespace App\Viender\Transformers\Version1;

use App\Tag;

class TagTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Tag $tag)
    {
        return [
            'id'            => (int) $tag->id,
            'name'          => $tag->name,
            'description'   => $tag->description,
        ];
    }
}