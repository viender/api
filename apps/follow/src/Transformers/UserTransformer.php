<?php

namespace Viender\Follow\Transformers;

use App\User;

class UserTransformer extends Transformer
{
    protected $availableIncludes = [];

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(User $user)
    {
        return [
            'name'      => $user->first_name . ' ' . $user->last_name, 
            'links'     => [
                [
                    'rel' => 'self',
                    'url' => url('/users') . '/' . $user->username,
                ],
                [
                    'rel' => 'self_html',
                    'url' => route('web.viender.profile.pages.profile', $user->username),
                ],
                [
                    'rel' => 'avatar',
                    'url' => $user->avatar_url,
                ],
            ],
        ];
    }
}
