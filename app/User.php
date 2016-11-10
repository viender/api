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
        'name', 'username', 'email', 'password', 'gender',
    ];

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
        return hasMany('App\Upvote');
    }

    public function downvotes() 
    {
        return hasMany('App\Downvote');
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
}
