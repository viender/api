<?php

namespace Viender\Socialite\Repositories;

use Viender\Socialite\Models\Upvote;
use Viender\Socialite\Contracts\Post\Upvotable;

class UpvotesRepository extends Repository
{
    public function model()
    {
        return 'Viender\Socialite\Models\Upvote';
    }

    public function toggle(Upvotable $upvotable, $user_id = 0) 
    {
        if(! $user_id) {
            $user_id = \Auth::user()->id;
        }

        if($upvotable->downvotes()->where('user_id', $user_id)->exists()) {
            $downvote = $upvotable->downvotes()->where('user_id', $user_id)->first();
            $downvote->delete();
        }

        if($upvotable->upvotes()->where('user_id', $user_id)->exists()) {
            $upvote = $upvotable->upvotes()->where('user_id', $user_id)->delete();
            return null;
        }

        $upvote = new Upvote(['user_id' => $user_id]);

        $upvotable->upvotes()->save($upvote);

        return $upvote;
    }
}