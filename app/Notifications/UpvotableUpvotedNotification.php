<?php

namespace App\Notifications;

use App\Upvote;
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
        return ['database'];
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
