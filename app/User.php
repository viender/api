<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

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

    public function questions()
    {
        return $this->hasMany('App\Question');
    }

    public function answers()
    {
        return $this->hasMany('App\Answer');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }

    public function auctions() 
    {
        return $this->hasMany('App\Auction');
    }

    public function bids() 
    {
        return $this->hasMany('App\Bid');
    }

    public function comments() 
    {
        return $this->hasMany('App\Comment');
    }

    public function upvotes() 
    {
        return $this->hasMany('App\Upvote');
    }

    public function downvotes() 
    {
        return $this->hasMany('App\Downvote');
    }

    public function stars() 
    {
        return $this->morphMany('App\Star', 'starable');
    }

    public function stared() 
    {
        return $this->hasMany('App\Star');
    }

    public function addresses() 
    {
        return $this->hasMany('App\Address');
    }

    public function socialAccounts() 
    {
        return $this->hasOne('App\SocialAccount');
    }
}
