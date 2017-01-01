<?php

namespace App\Listeners;

use App\Events\UpvotableUpvoted;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Notifications\UpvotableUpvotedNotification;

class UserEventSubscriber
{
    public function onUpvotableUpvoted($event)
    {
        $upvote = $event->upvote;

        $user = $upvote->upvotable->user;

        $user->notify(new UpvotableUpvotedNotification($upvote));
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param  Illuminate\Events\Dispatcher  $events
     */
    public function subscribe($events)
    {
        $events->listen(
            'App\Events\UpvotableUpvoted',
            'App\Listeners\UserEventSubscriber@onUpvotableUpvoted'
        );
    }
}
