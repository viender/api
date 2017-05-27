<?php

namespace Viender\Socialite\Policies;

use App\User;
use Viender\Socialite\Models\Comment;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicies
{
    use HandlesAuthorization;

    public function view(User $user, Comment $comment)
    {
        return true;
    }

    public function create(User $user)
    {
        return true;
    }

    public function update(User $user, Comment $comment)
    {
        return $user->id === $comment->user->id;
    }

    public function delete(User $user, Comment $comment)
    {
        return $user->id === $comment->user->id;
    }
}
