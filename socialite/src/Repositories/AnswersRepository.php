<?php

namespace Viender\Socialite\Repositories;

use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Upvote;
use Viender\Socialite\Models\Downvote;
use Viender\Socialite\Contracts\Post\Upvotable;
use Viender\Socialite\Contracts\Post\Answerable;

class AnswersRepository extends Repository
{
    public function model()
    {
        return 'Viender\Socialite\Models\Answer';
    }

    /**
     * Create answer writen by Authenticated user
     * 
     * @param  int     $user_id    
     * @param  Answerable $answerable 
     * @param  array      $data       
     * @return App\Answer
     */
    public function createByUser($user_id, Answerable $answerable, array $data) 
    {
        $data['user_id'] = $user_id;
        $data['title'] = '';

        return $answerable->answers()->save(new Answer($data));
    }

    public function toggleUpvote(Upvotable $upvotable, $user_id = 0) 
    {
        if(! $user_id) {
            $user_id = \Auth::user()->id;
        }

        if($upvotable->upvotes()->where('user_id', $user_id)->exists()) {
            $upvote = $upvotable->upvotes()->where('user_id', $user_id)->delete();
            return null;
        }

        $upvote = new Upvote(['user_id' => $user_id]);

        $upvotable->upvotes()->save($upvote);

        return $upvote;
    }

    public function toggleDownvote(Upvotable $upvotable, $user_id = 0) 
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