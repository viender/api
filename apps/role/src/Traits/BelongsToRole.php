<?php

namespace Viender\Role\Traits;

use Viender\Role\Models\Role;

trait BelongsToRole
{
    public function roles() {
        return $this->belongsToMany(Role::class);
    }
}
