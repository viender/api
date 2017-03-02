<?php

namespace Viender\Socialite\Listeners;

use Viender\Socialite\Events\UpvotableUpvoted;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Viender\Socialite\Notifications\UpvotableUpvotedNotification;

class IdeapoolUserEventSubscriber
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
            'Viender\Socialite\Events\UpvotableUpvoted',
            'Viender\Socialite\Listeners\IdeapoolUserEventSubscriber@onUpvotableUpvoted'
        );
    }
}
