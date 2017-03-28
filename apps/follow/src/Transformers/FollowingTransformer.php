<?php

namespace Viender\Follow\Transformers;

use Viender\Follow\Models\Follower;

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
    public function transform(Follower $follower)
    {
        $user = $follower->followee;

        return [
            'id'        => $user->id,
            'name'      => $user->first_name . ' ' . $user->last_name,
            'followed'  => \Auth::user()->followings()->where([
                    'follower_id'   => \Auth::user()->id,
                    'followee_id'   => $user->id,
                    'followee_type' => \App\User::class,
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
