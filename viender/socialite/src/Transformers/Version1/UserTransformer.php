<?php

namespace Viender\Socialite\Transformers\Version1;

use App\User;

class UserTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(User $user)
    {
        return [
            'id'        => (int) $user->id,
            'login'     => $user->username, 
            'name'      => $user->first_name . ' ' . $user->last_name, 
            'email'     => $user->email,
            'gender'    => $user->gender,
            'links'     => [
                [
                    'rel' => 'self',
                    'url' => url('/users') . '/' . $user->username,
                ],
                [
                    'rel' => 'avatar',
                    'url' => $user->avatar_url,
                ]
            ],
        ];
    }
}