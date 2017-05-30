<?php

namespace Viender\Socialite\Notifications;

use Viender\Socialite\Models\Comment;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class CommentableCommentedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $comment;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
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
        $commentable = $this->comment->commentable;

        $chunks = explode('\\', $this->comment->commentable_type);

        $commentableClass = $chunks[count($chunks) - 1];

        $url = config('app.url');

        switch ($this->comment->commentable_type) {
            case Question::class:
                $url = $commentable ? route('web.viender.socialite.pages.questionShow', $commentable) : url('/');
                break;

            case Answer::class:
                $url = $commentable ? route('web.viender.socialite.pages.answerShow', [$commentable->question, $commentable->slug]) : url('/');
                break;

            default:
                break;
        }

        return (new MailMessage)
            ->subject($this->comment->user->first_name . ' ' . $this->comment->user->last_name . ' commented your ' . $commentableClass)
            ->greeting('Hello!')
            ->line('We just want to let you know that ' . $this->comment->user->first_name . ' ' . $this->comment->user->last_name . ' commented on your ' . $commentableClass)
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
            'comment_id'  => $this->comment->id,
        ];
    }
}
