<?php

namespace Viender\Socialite\Traits;

trait HasTags
{
    public function tags() 
    {
        return $this->morphToMany('Viender\Socialite\Models\Tag', 'taggable');
    }
}