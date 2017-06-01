<?php

namespace Viender\Social;

use App\User;
use Viender\Imaginary\Imaginary;
use Illuminate\Support\Facades\Route;
use Viender\Social\Models\SocialAccount;
use Laravel\Socialite\Contracts\User as ProviderUser;

class Social
{
    protected $imaginary;

    public function __construct()
    {
        $this->imaginary = new Imaginary;
    }

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
                $profilePictureUrls = $this->imaginary->uploadRemotePicture($providerUser->avatar_original);


                $name = explode(' ', $providerUser->getName());
                $firstName = isset($name[0]) ? $name[0] : '';
                $lastName = isset($name[1]) ? $name[1] : '';

                $username = str_replace(' ', '-', $firstName . '-' . $lastName);

                $username = preg_replace('/[^A-Za-z0-9\-]/', '', $username); // Removes special chars.

                $suffix = User::where([
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                ])->count() + 1;

                $username = $username . '-' . $suffix;

                $userProperty = [
                    'email'                 => $providerUser->getEmail(),
                    'username'              => $username,
                    'first_name'            => ucwords(strtolower($firstName)),
                    'last_name'             => ucwords(strtolower($lastName)),
                    'avatar_url'            => $profilePictureUrls['avatar_url'],
                    'avatar_medium_url'     => $profilePictureUrls['avatar_medium_url'],
                    'avatar_large_url'      => $profilePictureUrls['avatar_large_url'],
                    'avatar_original_url'   => $profilePictureUrls['avatar_original_url'],
                    'password'              => bcrypt(substr(sha1(\Carbon\Carbon::now()), -8)),
                ];

                $user = new User($userProperty);
                $user->username = $username;
                $user->save();
            }

            $account->user()->associate($user);
            $account->save();

            return $user;
        }
    }

    public function createOrGetGoogleUser(ProviderUser $providerUser) {
        $account = SocialAccount::whereProvider('google')
            ->whereProviderUserId($providerUser->getId())
            ->first();

        if ($account) {
            return $account->user;
        } else {

            $account = new SocialAccount([
                'provider_user_id'  => $providerUser->getId(),
                'provider'          => 'google'
            ]);

            $user = User::whereEmail($providerUser->getEmail())->first();

            if (!$user) {
                $profilePictureUrls = $this->imaginary->uploadRemotePicture($providerUser->avatar_original);

                $name = explode(' ', $providerUser->getName());
                $firstName = isset($name[0]) ? $name[0] : '';
                $lastName = isset($name[1]) ? $name[1] : '';

                $username = str_replace(' ', '-', $firstName . '-' . $lastName);

                $username = preg_replace('/[^A-Za-z0-9\-]/', '', $username); // Removes special chars.

                $suffix = User::where([
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                ])->count() + 1;

                $username = $username . '-' . $suffix;

                $userProperty = [
                    'email'                 => $providerUser->getEmail(),
                    'username'              => $username,
                    'first_name'            => ucwords(strtolower($firstName)),
                    'last_name'             => ucwords(strtolower($lastName)),
                    'avatar_url'            => $profilePictureUrls['avatar_url'],
                    'avatar_medium_url'     => $profilePictureUrls['avatar_medium_url'],
                    'avatar_large_url'      => $profilePictureUrls['avatar_large_url'],
                    'avatar_original_url'   => $profilePictureUrls['avatar_original_url'],
                    'password'              => bcrypt(substr(sha1(\Carbon\Carbon::now()), -8)),
                ];

                $user = new User($userProperty);
                $user->username = $username;
                $user->save();
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
