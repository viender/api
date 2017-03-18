<?php

namespace Viender\Profile\Http\Controllers;

use App\User;

class ProfileController extends Controller
{
	public function profile(User $user)
	{
		return view('viender.profile.profile::index')->with(compact('user'));
	}
}