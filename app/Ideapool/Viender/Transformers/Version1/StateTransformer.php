<?php

namespace App\Ideapool\Viender\Transformers\Version1;

use App\Ideapool\State;

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