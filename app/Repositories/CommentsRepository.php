<?php

namespace App\Repositories;

class CommentsRepository extends Repository
{
    public function model()
    {
        return 'App\Comment';
    }
}