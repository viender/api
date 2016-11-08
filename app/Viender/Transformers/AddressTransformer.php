<?php

namespace App\Viender\Transformers;

use App\Address;
use League\Fractal\TransformerAbstract;

class AddressTransformer extends TransformerAbstract
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Address $address)
    {
        return [
            'id'      => (int) $address->id,
            'street'   => $address->street->name,
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