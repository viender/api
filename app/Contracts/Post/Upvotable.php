<?php

namespace App\Contracts\Post;

interface Upvotable
{
    public function upvotes();
    public function downvotes();
}