<?php

namespace Viender\Profile\Http\Controllers;

use App\User;

class ProfileController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

	public function profile(User $user)
	{
        $metaTitle = $user->fullName() . ' - ' . config('app.name');
		return view('viender.profile.profile::index')->with(compact('user', 'metaTitle'));
	}

	public function questions(User $user)
	{
        $metaTitle = $user->fullName() . ' - ' . config('app.name');
		return view('viender.profile.profile::questions')->with(compact('user', 'metaTitle'));
	}

	public function topics(User $user)
	{
        $metaTitle = $user->fullName() . ' - ' . config('app.name');
		return view('viender.profile.profile::topics')->with(compact('user', 'metaTitle'));
	}

	public function followings(User $user)
	{
        $metaTitle = $user->fullName() . ' - ' . config('app.name');
		return view('viender.profile.profile::followings')->with(compact('user', 'metaTitle'));
	}

	public function followers(User $user)
	{
        $metaTitle = $user->fullName() . ' - ' . config('app.name');
		return view('viender.profile.profile::followers')->with(compact('user', 'metaTitle'));
	}
}
