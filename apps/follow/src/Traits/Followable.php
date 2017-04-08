<?php

namespace Viender\Follow\Traits;

use Viender\Follow\Models\Follow;

trait Followable
{
    public function followers()
    {
        return $this->morphToMany('App\User', 'followable');
    }
}
