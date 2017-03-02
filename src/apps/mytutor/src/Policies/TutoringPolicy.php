<?php

namespace Viender\Mytutor\Policies;

use App\User;
use Viender\Mytutor\Models\Tutoring;
use Illuminate\Auth\Access\HandlesAuthorization;

class TutoringPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the tutoring.
     *
     * @param  \App\User  $user
     * @param  \App\Viender\Mytutor\Models\Tutoring  $tutoring
     * @return mixed
     */
    public function view(User $user, Tutoring $tutoring)
    {
        return true;
    }

    /**
     * Determine whether the user can create tutorings.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return \Auth::user()->id === $user->id;
    }

    /**
     * Determine whether the user can update the tutoring.
     *
     * @param  \App\User  $user
     * @param  \App\Viender\Mytutor\Models\Tutoring  $tutoring
     * @return mixed
     */
    public function update(User $user, Tutoring $tutoring)
    {
        return \Auth::user()->id === $tutoring->student_id;
    }

    /**
     * Determine whether the user can delete the tutoring.
     *
     * @param  \App\User  $user
     * @param  \App\Viender\Mytutor\Models\Tutoring  $tutoring
     * @return mixed
     */
    public function delete(User $user, Tutoring $tutoring)
    {
        return \Auth::user()->id === $tutoring->student_id;
    }
}
