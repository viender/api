<?php

namespace App\Ideapool\Repositories;

use App\Ideapool\Upvote;
use App\Ideapool\Contracts\Post\Upvotable;

class UsersRepository extends Repository
{
    public function model()
    {
        return 'App\User';
    }
}