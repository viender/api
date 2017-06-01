<?php

namespace Viender\Notification\Transformers;

use App\User;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Upvote;
use Viender\Socialite\Models\Comment;
use Viender\Socialite\Models\Question;
use Illuminate\Support\Facades\Storage;
use Viender\Address\Transformers\UserTransformer;
use Illuminate\Notifications\DatabaseNotification;
use Viender\Socialite\Transformers\AnswerTransformer;
use Viender\Socialite\Transformers\CommentTransformer;
use Viender\Socialite\Transformers\QuestionTransformer;
use Viender\Socialite\Notifications\QuestionAnsweredNotification;
use Viender\Socialite\Notifications\UpvotableUpvotedNotification;
use Viender\Socialite\Transformers\AnswerWithQuestionTransformer;
use Viender\Socialite\Notifications\CommentableCommentedNotification;
use Viender\Socialite\Transformers\CommentWithCommentableTransformer;

class NotificationTransformer extends Transformer
{
    protected $user;
    protected $notificationObject;
    protected $notificationObjectType;

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [

    ];

    /**
     * Include resources without needing it to be requested.
     *
     * @var array
     */
    protected $defaultIncludes = ['subject', 'object'];

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(DatabaseNotification $notification)
    {
        $transform = [
            'id'            => $notification->id,
            'type'          => $notification->type,
            'created_at'    => $notification->created_at,
            'read_at'       => $notification->read_at,
            'links'   => [
                [
                    'rel' => 'self',
                    'url' => route('api.viender.notification.notifications.read', $notification),
                ],
            ],
        ];

        return $this->serializeNotification($notification, $transform);
    }

    /**
     * Include User
     *
     * @return League\Fractal\ItemResource
     */
    public function includeSubject($notification)
    {
        $user = $this->user;

        return $this->item($user, new UserTransformer);
    }

    public function includeObject($notification)
    {
        $notificationObject = null;

        switch ($this->notificationObjectType) {
            case Answer::class:
                $notificationObject = $this->item($this->notificationObject, new AnswerWithQuestionTransformer);
                break;
            case Question::class:
                $notificationObject = $this->item($this->notificationObject, new QuestionTransformer);
                break;
            case Comment::class:
                $notificationObject = $this->item($this->notificationObject, new CommentWithCommentableTransformer);
                break;
            case User::class:
                $notificationObject = $this->item($this->notificationObject, new UserTransformer);
                break;
            default:
                break;
        }

        return $notificationObject;
    }

    public function serializeNotification($notif, $transform)
    {
        switch ($notif->type) {
            case CommentableCommentedNotification::class:
                $notif->commentable = $notif->data['commentable_type']::withTrashed()->find($notif->data['commentable_id']);
                $this->user = User::find($notif->data['subject_id']);
                $this->notificationObject = $notif->commentable;
                $this->notificationObjectType = get_class($this->notificationObject);
                break;
            case QuestionAnsweredNotification::class:
                $notif->answer = Answer::with('user')->withTrashed()->where('id', $notif->data['answer_id'])->first();
                $this->user = User::find($notif->data['subject_id']);
                $this->notificationObject = $notif->answer;
                $this->notificationObjectType = Answer::class;
                break;
            case UpvotableUpvotedNotification::class:
                $notif->upvotable = $notif->data['upvotable_type']::withTrashed()->find($notif->data['upvotable_id']);
                $this->user = User::find($notif->data['subject_id']);
                $this->notificationObject = $notif->upvotable;
                $this->notificationObjectType = get_class($this->notificationObject);
                break;
            default:
                # code...
                break;
        }

        return $transform;
    }
}
