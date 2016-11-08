<?php

namespace App\Viender\Transformers\Version1;

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
            'name'      => $user->name, 
            'email'     => $user->email,
            'gender'    => $user->gender,
            'links'     => [
                [
                    'rel' => 'self',
                    'uri' => url('/users') . '/' . $user->id,
                ]
            ],
        ];
    }
}