<?php

namespace Viender\Userdata\Transformers\Version1;

use Viender\Userdata\State;

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