<?php 

namespace Viender\Profile;

trait HasUserdata
{
    public function addresses()
    {
        return $this->hasMany('Viender\Profile\Address');
    }

    public function socialAccounts()
    {
        return $this->hasOne('Viender\Profile\SocialAccount');
    }

    public function fullName()
    {
        return $this->first_name . ' ' . $this->last_name;
    }
}