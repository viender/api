<?php 

namespace Viender\Address\Traits;

trait HasAddress
{
    public function addresses()
    {
        return $this->hasMany('Viender\Address\Models\Address');
    }

    public function socialAccounts()
    {
        return $this->hasOne('Viender\Address\Models\SocialAccount');
    }

    public function fullName()
    {
        return $this->first_name . ' ' . $this->last_name;
    }
}