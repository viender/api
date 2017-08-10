<?php

namespace Viender\Social\Http\Controllers\Auth;

use Socialite;
use Carbon\Carbon;
use Google_Client;
use Google_Service_People;
use Viender\Social\Social;
use Illuminate\Http\Request;
use Viender\Social\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Viender\Social\Http\Controllers\Auth\LoginController;

class GoogleLoginController extends LoginController
{
    public function handle()
    {
        return Socialite::driver('google')
            // ->scopes(['openid', 'profile', 'email', Google_Service_People::CONTACTS_READONLY])
            ->scopes(['openid', 'profile', 'email'])
            ->redirect();
    }

    public function callback(Social $social)
    {
        $providerUser = Socialite::driver('google')->user();

        $user = $social->createOrGetGoogleUser($providerUser);

        auth()->login($user, true);

        return redirect()->intended('/?ref=google-login');
    }
}
