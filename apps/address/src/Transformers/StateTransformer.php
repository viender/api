<?php

namespace Viender\Address\Transformers;

use Viender\Address\Models\State;

class StateTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(State $state)
    {
        return [
            'id'      => (int) $state->id,
            'name'    => $state->name,
        ];
    }
}