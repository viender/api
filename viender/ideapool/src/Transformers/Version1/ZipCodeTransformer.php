<?php

namespace Viender\Ideapool\Transformers\Version1;

use Viender\Userdata\ZipCode;

class ZipCodeTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(ZipCode $zipCode)
    {
        return [
            'id'      => (int) $zipCode->id,
            'code'    => $zipCode->code,
        ];
    }
}