<?php

namespace Viender\Address\Transformers;

use App\User;
use Viender\Address\Transformers\DatabaseNotificationTransformer;

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
                ],
                [
                    'rel' => 'notifications',
                    'url' => url('/users') . '/' . $user->username . '/notifications',
                ]
            ],
        ];
    }

    /**
     * Include Question
     *
     * @return League\Fractal\ItemResource
     */
    public function includeNotifications($user)
    {
        $notifications = $user->notifications()->orderBy('created_at', 'desc')->get();

        return $this->collection($notifications, new DatabaseNotificationTransformer(), 'notifications');
    }
}