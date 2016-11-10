<?php

namespace App\Viender\Transformers\Version1;

use App\Address;
use App\Viender\Transformers\Version1\Traits\OwnerIncludable;

class AddressTransformer extends Transformer
{
    use OwnerIncludable;
    
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'owner'
    ];
    
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Address $address)
    {
        return [
            'id'      => (int) $address->id,
            'street'   => $address->street,
            'street_line2'   => $address->street_line2,
            'zip_code'   => $address->zipCode->code,
            'city'    => $address->city->name,
            'state'    => $address->state->name,
            'country'    => $address->country->name,
            'links'   => [
                [
                    'rel' => 'self',
                    'uri' => url('/addresses') . '/' . $address->id,
                ]
            ],
        ];
    }
}