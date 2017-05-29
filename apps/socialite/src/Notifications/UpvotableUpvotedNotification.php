<?php

namespace Viender\Socialite\Notifications;

use Illuminate\Bus\Queueable;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Upvote;
use Viender\Socialite\Models\Comment;
use Viender\Socialite\Models\Question;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class UpvotableUpvotedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $upvote;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Upvote $upvote)
    {
        $this->upvote = $upvote;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $upvotable = $this->upvote->upvotable;

        $chunks = explode('\\', $this->upvote->upvotable_type);

        $upvotableClass = $chunks[count($chunks) - 1];

        $url = config('app.url');

        switch ($this->upvote->upvotable_type) {
            case Question::class:
                $url = route('web.viender.socialite.pages.questionShow', $upvotable);
                break;

            case Answer::class:
                $url = route('web.viender.socialite.pages.answerShow', [$upvotable->question, $upvotable->slug]);
                break;

            default:
                break;
        }

        return (new MailMessage)
            ->subject($this->upvote->user->first_name . ' ' . $this->upvote->user->last_name . ' upvoted your ' . $upvotableClass)
            ->greeting('Hello!')
            ->line('We just want to let you know that ' . $this->upvote->user->first_name . ' ' . $this->upvote->user->last_name . ' upvoted your ' . $upvotableClass)
            ->action('Read in Viender', $url)
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'subject_id' => $this->upvote->user->id,
            'upvote_id' => $this->upvote->id,
            'upvotable_id' => $this->upvote->upvotable_id,
            'upvotable_type' => $this->upvote->upvotable_type,
        ];
    }
}
