<?php

namespace App\Ideapool\Viender\Transformers\Version1\Traits;

trait TransformerTrait
{
    protected $namespace = '\App\Viender\Transformers\Version1\\';

    public function getTransformer($itemType) 
    {
        return $this->namespace . explode('\\', $itemType)[1] . 'Transformer';
    }
}