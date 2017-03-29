<?php

namespace Viender\Topic\Traits;

trait HasTopics
{
    public function topics()
    {
        return $this->morphToMany('Viender\Topic\Models\Topic', 'topicable');
    }
}
