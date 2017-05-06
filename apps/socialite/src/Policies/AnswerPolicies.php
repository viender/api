<?php

namespace Viender\Socialite\Policies;

use App\User;
use Viender\Socialite\Models\Answer;
use Illuminate\Auth\Access\HandlesAuthorization;

class AnswerPolicies
{
    use HandlesAuthorization;

    public function view(User $user, Answer $topic)
    {
        return true;
    }

    public function create(User $user)
    {
        return true;
    }

    public function update(User $user)
    {
        return $user->id === $topic->user->id;
    }

    public function delete(User $user, Answer $topic)
    {
        return $user->id === $topic->user->id;
    }
}
