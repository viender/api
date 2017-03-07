<?php

namespace Viender\Socialite\Repositories;

use Viender\Socialite\Models\Downvote;
use Viender\Socialite\Contracts\Post\Upvotable;

class DownvotesRepository extends Repository
{
    public function model()
    {
        return 'Viender\Socialite\Models\Downvote';
    }

    public function toggle(Upvotable $upvotable, $user_id = 0) 
    {
        if(! $user_id) {
            $user_id = \Auth::user()->id;
        }

        if($upvotable->upvotes()->where('user_id', $user_id)->exists()) {
            $upvote = $upvotable->upvotes()->where('user_id', $user_id)->first();
            $upvote->delete();
        }

        if($upvotable->downvotes()->where('user_id', $user_id)->exists()) {
            $downvote = $upvotable->downvotes()->where('user_id', $user_id)->delete();
            return null;
        }

        $downvote = new Downvote(['user_id' => $user_id]);

        $upvotable->downvotes()->save($downvote);

        return $downvote;
    }
}