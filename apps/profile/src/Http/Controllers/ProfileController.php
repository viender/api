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
        $this->middleware('auth');
    }

	public function profile(User $user)
	{
		return view('viender.profile.profile::index')->with(compact('user'));
	}

	public function questions(User $user)
	{
		return view('viender.profile.profile::questions')->with(compact('user'));
	}

	public function topics(User $user)
	{
		return view('viender.profile.profile::topics')->with(compact('user'));
	}

	public function followings(User $user)
	{
		return view('viender.profile.profile::followings')->with(compact('user'));
	}

	public function followers(User $user)
	{
		return view('viender.profile.profile::followers')->with(compact('user'));
	}
}
