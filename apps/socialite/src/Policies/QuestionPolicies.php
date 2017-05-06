<?php

namespace Viender\Socialite\Policies;

use App\User;
use Viender\Socialite\Models\Question;
use Illuminate\Auth\Access\HandlesAuthorization;

class QuestionPolicies
{
    use HandlesAuthorization;

    public function view(User $user, Question $topic)
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

    public function delete(User $user, Question $topic)
    {
        return $user->id === $topic->user->id;
    }
}
