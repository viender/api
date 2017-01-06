<?php

namespace Viender\Ideapool\Listeners;

use Viender\Ideapool\Events\UpvotableUpvoted;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Viender\Ideapool\Notifications\UpvotableUpvotedNotification;

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
            'Viender\Ideapool\Events\UpvotableUpvoted',
            'Viender\Ideapool\Listeners\UserEventSubscriber@onUpvotableUpvoted'
        );
    }
}
