<?php

namespace Viender\Social\Http\Controllers\Auth;

use Socialite;
use Carbon\Carbon;
use Viender\Social\Social;
use Viender\Social\Http\Controllers\Controller;

class FacebookLoginController
{
    public function handle()
    {
        return Socialite::driver('facebook')->redirect();
    }

    public function callback(Social $social)
    {
        $providerUser = \Socialite::driver('facebook')->user();

        $user = $social->createOrGetFacebookUser($providerUser);

        auth()->login($user, true);

        return redirect()->intended('/?ref=facebook-login');
    }
}
