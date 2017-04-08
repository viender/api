<?php

namespace Viender\Follow\Transformers;

use App\User;

class FollowingTransformer extends Transformer
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [

    ];

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(User $user)
    {
        return [
            'id'        => $user->id,
            'name'      => $user->first_name . ' ' . $user->last_name,
            'followed'  => \Auth::user()->followedUsers()->where([
                    'followable_id'   => $user->id,
                ])->exists(),
            'links'     => [
                [
                    'rel' => 'self_html',
                    'url' => route('web.viender.profile.pages.profile', $user->username),
                ],
                [
                    'rel' => 'avatar',
                    'url' => $user->avatar_url,
                ],
                [
                    'rel' => 'follow',
                    'url' => route('api.viender.follow.users.followings.store', \Auth::user()),
                ],
            ],
        ];
    }
}
