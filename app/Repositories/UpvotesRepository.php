<?php

namespace App\Repositories;

use App\Upvote;
use App\Contracts\Post\Upvotable;

class UpvotesRepository extends Repository
{
    public function model()
    {
        return 'App\Upvote';
    }

    public function toggle($user_id, Upvotable $upvotable) 
    {
        if($upvotable->upvotes()->where('user_id', $user_id)->exists()) {
            $upvote = $upvotable->upvotes()->where('user_id', $user_id)->first();
            $upvote->delete();
            return false;
        }

        $upvotable->upvotes()->save(new Upvote(['user_id' => $user_id]));

        return true;
    }
}