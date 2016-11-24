<?php

namespace App\Repositories;

use App\Comment;
use App\Contracts\Post\Commentable;

class CommentsRepository extends Repository
{
    public function model()
    {
        return 'App\Comment';
    }

    public function createByUser($user_id, Commentable $commentable, array $data) 
    {
        $data['user_id'] = $user_id;

        return $commentable->comments()->save(new Comment($data));
    }
}