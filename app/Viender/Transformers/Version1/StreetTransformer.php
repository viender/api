<?php

namespace App\Viender\Transformers\Version1;

use App\Street;

class StreetTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Street $street)
    {
        return [
            'id'      => (int) $street->id,
            'name'    => $street->name,
        ];
    }
}