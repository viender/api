<?php

namespace Viender\Socialite\Policies;

use App\User;
use Viender\Socialite\Models\Answer;
use Illuminate\Auth\Access\HandlesAuthorization;

class AnswerPolicies
{
    use HandlesAuthorization;

    public function view(User $user, Answer $answer)
    {
        return true;
    }

    public function create(User $user)
    {
        return true;
    }

    public function update(User $user, Answer $answer)
    {
        return $user->id === $answer->user->id;
    }

    public function delete(User $user, Answer $answer)
    {
        return $user->id === $answer->user->id;
    }
}
