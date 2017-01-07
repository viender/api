<?php 

namespace Viender\Userdata;

trait HasUserdata
{
    public function addresses()
    {
        return $this->hasMany('Viender\Userdata\Address');
    }
}