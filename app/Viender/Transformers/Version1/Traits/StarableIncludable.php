<?php

namespace App\Viender\Transformers\Version1\Traits;

trait StarableIncludable
{
    /**
     * Include Starable
     *
     * @return League\Fractal\ItemResource
     */
    public function includeStarable($item)
    {
        $starable = $item->starable;
        
        $starableTransformer = '\App\Viender\Transformers\Version1\\' . explode('\\', $item->starable_type)[1] . 'Transformer';

        return $this->item($starable, new $starableTransformer);
    }
}