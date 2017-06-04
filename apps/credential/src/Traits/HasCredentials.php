<?php

namespace Viender\Credential\Traits;

use Viender\Credential\Models\Credential;

trait HasCredentials
{
    public function credentials()
    {
        return $this->hasMany(Credential::class);
    }
}
