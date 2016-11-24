<?php

namespace App\Repositories;

use App\Upvote;
use App\Comment;
use App\Contracts\Post\Upvotable;
use App\Contracts\Post\Commentable;
use Illuminate\Database\QueryException;

class UsersRepository extends Repository
{
    public function model()
    {
        return 'App\User';
    }

    public function toggleUpvote(Upvotable $upvotable) 
    {
        if($upvotable->upvotes()->where('user_id', \Auth::user()->id)->exists()) {
            $upvote = $upvotable->upvotes()->where('user_id', \Auth::user()->id)->first();
            $upvote->delete();
            return false;
        }

        $upvotable->upvotes()->save(new Upvote(['user_id' => \Auth::user()->id]));

        return true;
    }

    public function addComment(Commentable $commentable, array $requestArray) 
    {
        $requestArray['user_id'] = \Auth::user()->id;
        
        try {
            $commentable->comments()->save(new Comment($requestArray));
        } catch (QueryException $e) {
            return false;
        }

        return true;
    }
}