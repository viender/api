<?php

namespace Viender\Ideapool\Transformers\Version1;

use Viender\Userdata\Address;
use Viender\Ideapool\Transformers\Version1\Traits\UserIncludable;

class AddressTransformer extends Transformer
{
    use UserIncludable;
    
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
                    'url' => url('/addresses') . '/' . $address->id,
                ]
            ],
        ];
    }
}