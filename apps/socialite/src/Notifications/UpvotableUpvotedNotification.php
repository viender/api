<?php

namespace Viender\Socialite\Notifications;

use Viender\Socialite\Models\Upvote;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class UpvotableUpvotedNotification extends Notification
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

        if($this->upvote->upvotable_type == 'Viender\Socialite\Models\Question') {
            $url = route('web.viender.socialite.pages.questionShow', $upvotable);
        }elseif($this->upvote->upvotable_type == 'Viender\Socialite\Models\Answer') {
            $url = route('web.viender.socialite.pages.answerShow', [$upvotable->question, $upvotable->slug]);
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
            'upvotable_type'    => $this->upvote->upvotable_type,
            'upvotable_id'      => $this->upvote->upvotable_id,
            'date'              => $this->upvote->created_at,
        ];
    }
}
