<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Viender\Mailer\Jobs\SendWelcomeEmail;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        $data['first_name'] = ucwords(strtolower($data['first_name']));
        $data['last_name'] = ucwords(strtolower($data['last_name']));

        $username = str_replace(' ', '-', $data['first_name'] . '-' . $data['last_name']);

        $username = preg_replace('/[^A-Za-z0-9\-]/', '', $username); // Removes special chars.

        $suffix = User::where([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
        ])->count() + 1;

        $username = $username . '-' . $suffix;

        $user = new User([
            'first_name'        => $data['first_name'],
            'last_name'         => $data['last_name'],
            'avatar_url'        => "public/images/profile.jpg",
            'avatar_medium_url' => "public/images/profile-medium.jpg",
            'avatar_large_url'  => "public/images/profile-large.jpg",
            'avatar_original_url'  => "public/images/profile-original.jpg",
            'email'             => $data['email'],
            'password'          => bcrypt($data['password']),
        ]);

        $user->username = $username;
        $user->save();

        dispatch(new SendWelcomeEmail($user));

        return $user;
    }
}
