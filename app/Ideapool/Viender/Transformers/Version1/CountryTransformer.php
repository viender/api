<?php

namespace App\Ideapool\Viender\Transformers\Version1;

use App\Ideapool\Country;

class CountryTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Country $country)
    {
        return [
            'id'      => (int) $country->id,
            'name'    => $country->name,
        ];
    }
}