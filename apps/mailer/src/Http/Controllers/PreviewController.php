<?php

namespace Viender\Mailer\Http\Controllers;

use App\User;

class PreviewController extends Controller
{
	public function welcome()
	{
		return view('viender.mailer.mailer::emails.welcome');
	}
}
