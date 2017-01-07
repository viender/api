<?php

namespace Viender\Socialite\Contracts\Post;

interface Upvotable
{
    public function upvotes();
    public function downvotes();
}