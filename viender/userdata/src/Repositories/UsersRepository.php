<?php

namespace App\Repositories;


class UsersRepository extends Repository
{
    public function model()
    {
        return 'App\User';
    }
}