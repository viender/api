<?php

namespace App\Ideapool\Repositories;

use App\Ideapool\Upvote;
use App\Ideapool\Contracts\Post\Upvotable;

class UpvotesRepository extends Repository
{
    public function model()
    {
        return 'App\Ideapool\Upvote';
    }

    public function toggle($user_id, Upvotable $upvotable) 
    {
        if($upvotable->upvotes()->where('user_id', $user_id)->exists()) {
            $upvote = $upvotable->upvotes()->where('user_id', $user_id)->first();
            $upvote->delete();
            return null;
        }

        $upvote = new Upvote(['user_id' => $user_id]);

        $upvotable->upvotes()->save($upvote);

        return $upvote;
    }
}