<?php

namespace Viender\Profile\Http\Controllers;

class ProfileController extends Controller
{
	public function index()
	{
		return view('viender.profile.profile::index');
	}
}