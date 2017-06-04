<?php

namespace Viender\Credential\Traits;

use Viender\Credential\Models\Credential;

trait BelongsToCredentials
{
    public function credential()
    {
        return $this->belongsTo(Credential::class);
    }
}
