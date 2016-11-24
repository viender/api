<?php

namespace App\Contracts\Post;

interface Commentable
{
    public function upvotes();
    public function downvotes();
}