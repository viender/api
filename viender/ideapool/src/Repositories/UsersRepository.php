<?php

namespace Viender\Ideapool\Repositories;

use Viender\Ideapool\Upvote;
use Viender\Ideapool\Contracts\Post\Upvotable;

class UsersRepository extends Repository
{
    public function model()
    {
        return 'App\User';
    }
}