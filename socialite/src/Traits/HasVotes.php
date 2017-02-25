<?php

namespace Viender\Socialite\Traits;

trait HasVotes
{
    public function upvotes()
    {
        return $this->morphMany('Viender\Socialite\Upvote', 'upvotable');
    }

    public function downvotes()
    {
        return $this->morphMany('Viender\Socialite\Downvote', 'downvotable');
    }
}