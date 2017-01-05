<?php

namespace App\Ideapool\Contracts\Post;

interface Upvotable
{
    public function upvotes();
    public function downvotes();
}