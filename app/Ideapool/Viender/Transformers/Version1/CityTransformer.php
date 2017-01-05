<?php

namespace App\Ideapool\Viender\Transformers\Version1;

use App\Ideapool\City;

class CityTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(City $city)
    {
        return [
            'id'      => (int) $city->id,
            'name'    => $city->name,
        ];
    }
}