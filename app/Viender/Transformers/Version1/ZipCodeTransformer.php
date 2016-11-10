<?php

namespace App\Viender\Transformers\Version1;

use App\ZipCode;

class ZipCodeTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(ZipCode $street)
    {
        return [
            'id'      => (int) $street->id,
            'name'    => $street->name,
        ];
    }
}