<?php

namespace App;

use Viender\Dealer\Dealerable;
use Viender\Socialite\Sociable;
use Viender\Userdata\HasUserdata;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Dealerable, HasUserdata, Sociable, HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'username', 'avatar_url', 'email', 'password', 'gender',
    ];

    public function fullName() 
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'username';
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function socialAccounts() 
    {
        return $this->hasOne('App\SocialAccount');
    }
}
