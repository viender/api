<?php

namespace Viender\Socialite\Transformers;

use Viender\Socialite\Models\Tag;

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