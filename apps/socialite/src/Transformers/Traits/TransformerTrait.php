<?php

namespace Viender\Socialite\Transformers\Traits;

trait TransformerTrait
{
    protected $namespace = '\Viender\Socialite\Transformers\\';

    public function getTransformer($itemType) 
    {
    	$className = explode('\\', $itemType);
        return $this->namespace . $className[sizeof($className)-1] . 'Transformer';
    }
}