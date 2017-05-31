<?php

namespace Viender\Social\Http\Controllers\Auth;

use Socialite;
use Carbon\Carbon;
use Google_Client;
use Google_Service_People;
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

    public function callback(Request $request)
    {
        $providerUser = Socialite::driver('google')->user();

        // Set token for the Google API PHP Client
        // $google_client_token = [
        //     'access_token' => $providerUser->token,
        //     'refresh_token' => $providerUser->refreshToken,
        //     'expires_in' => $providerUser->expiresIn
        // ];

        // $client = new Google_Client();
        // $client->setApplicationName("Laravel");
        // $client->setDeveloperKey(env('GOOGLE_SERVER_KEY'));
        // $client->setAccessToken(json_encode($google_client_token));

        // $service = new Google_Service_People($client);

        // $optParams = array('requestMask.includeField' => 'person.phone_numbers,person.names,person.email_addresses');
        // $results = $service->people_connections->listPeopleConnections('people/me',$optParams);

        // dd($providerUser);
        echo $providerUser->getId();
    }
}
