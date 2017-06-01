<?php

namespace Viender\Socialite\Notifications;

use Illuminate\Bus\Queueable;
use Viender\Socialite\Models\Answer;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class QuestionAnsweredNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $answer;
    public $user;
    public $question;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Answer $answer)
    {
        $this->answer = $answer;
        $this->question = $answer->question;
        $this->user = $this->question->user;
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
        $url = route('web.viender.socialite.pages.questionShow', $this->question);

        return (new MailMessage)
            ->subject($this->answer->user->first_name . ' ' . $this->answer->user->last_name . ' answered your question')
            ->greeting('Hello!')
            ->line($this->answer->user->first_name . ' ' . $this->answer->user->last_name . ' answered your question')
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
            'question_id'       => $this->question->id,
            'answer_id'         => $this->answer->id,
            'subject_id'        => $this->question->user->id,
        ];
    }
}
