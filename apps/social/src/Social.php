<?php

namespace Viender\Social;

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Contracts\User as ProviderUser;
use Viender\Social\Models\SocialAccount;

class Social
{
    public function createOrGetFacebookUser(ProviderUser $providerUser)
    {
        $account = SocialAccount::whereProvider('facebook')
            ->whereProviderUserId($providerUser->getId())
            ->first();

        if ($account) {
            return $account->user;
        } else {

            $account = new SocialAccount([
                'provider_user_id'  => $providerUser->getId(),
                'provider'          => 'facebook'
            ]);

            $user = User::whereEmail($providerUser->getEmail())->first();

            if (!$user) {

                $user = User::create([
                    'email' => $providerUser->getEmail(),
                    'name'  => $providerUser->getName(),
                ]);
            }

            $account->user()->associate($user);
            $account->save();

            return $user;
        }
    }

	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\Social\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        });
	}
}
