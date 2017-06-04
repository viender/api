<?php

namespace App;

use Laravel\Scout\Searchable;
use Viender\Dealer\Dealerable;
use Laravel\Passport\HasApiTokens;
use Viender\Follow\Traits\Followable;
use Viender\Mytutor\Traits\Tutorable;
use Viender\Address\Traits\HasAddress;
use Viender\Role\Traits\BelongsToRole;
use Viender\Socialite\Traits\Sociable;
use Illuminate\Notifications\Notifiable;
use Viender\Follow\Traits\CanFollowUsers;
use Viender\Topic\Traits\CanFollowTopics;
use Viender\Credential\Traits\HasCredentials;
use Viender\Address\Transformers\UserTransformer;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Dealerable,
        HasAddress,
        Sociable,
        HasApiTokens,
        Notifiable,
        Tutorable,
        Followable,
        CanFollowUsers,
        CanFollowTopics,
        Searchable,
        BelongsToRole,
        HasCredentials;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'avatar_url', 'avatar_medium_url', 'avatar_large_url', 'avatar_original_url', 'email', 'password', 'gender', 'bio', 'location', 'website', 'tutorial_complete_at',
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
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $transformer = new UserTransformer();

        $array = [
            'id'            => $this->id,
            'first_name'    => $this->first_name,
            'last_name'     => $this->last_name,
        ];

        return $array;
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
