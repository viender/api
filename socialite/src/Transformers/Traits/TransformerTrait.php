<?php

namespace Viender\Socialite\Transformers\Traits;

trait TransformerTrait
{
    protected $namespace = '\App\Viender\Transformers\\';

    public function getTransformer($itemType) 
    {
        return $this->namespace . explode('\\', $itemType)[1] . 'Transformer';
    }
}