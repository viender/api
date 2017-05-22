<?php

namespace Viender\Socialite\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Viender\Socialite\Events\QuestionAnswered;
use Viender\Socialite\Events\UpvotableUpvoted;
use Viender\Socialite\Notifications\QuestionAnsweredNotification;
use Viender\Socialite\Notifications\UpvotableUpvotedNotification;
use Viender\Socialite\Notifications\CommentableCommentedNotification;

class IdeapoolUserEventSubscriber
{
    public function onUpvotableUpvoted($event)
    {
        $upvote = $event->upvote;

        $user = $upvote->upvotable->user;

        $user->notify(new UpvotableUpvotedNotification($upvote));
    }

    public function onQuestionAnswered($event)
    {
        $answer = $event->answer;

        $user = $answer->question->user;

        $user->notify(new QuestionAnsweredNotification($answer));
    }

    public function onCommentableCommented($event)
    {
        $comment = $event->comment;

        $user = $comment->commentable->user;

        $user->notify(new CommentableCommentedNotification($comment));
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

        $events->listen(
            'Viender\Socialite\Events\QuestionAnswered',
            'Viender\Socialite\Listeners\IdeapoolUserEventSubscriber@onQuestionAnswered'
        );
    }
}
