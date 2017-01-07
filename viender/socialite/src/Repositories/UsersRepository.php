<?php

namespace Viender\Socialite\Repositories;

use Viender\Socialite\Upvote;
use Viender\Socialite\Contracts\Post\Upvotable;

class UsersRepository extends Repository
{
    public function model()
    {
        return 'App\User';
    }
}