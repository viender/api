<?php

namespace App\Repositories;

use App\Upvote;
use App\Contracts\Post\Upvotable;

class UsersRepository extends Repository
{
    public function model()
    {
        return 'App\User';
    }
}