<?php

namespace Viender\Notification\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Viender\Socialite\Models\Answer;
use Illuminate\Support\Facades\Storage;
use Viender\Socialite\Notifications\QuestionAnsweredNotification;
use Viender\Socialite\Notifications\UpvotableUpvotedNotification;
use Viender\Socialite\Notifications\CommentableCommentedNotification;

class NotificationsController extends Controller
{
     /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

	public function health()
    {
        return response()->json([
            'status' => 'healthy',
        ]);
    }

    public function index(Request $request)
    {
        $user = \Auth::user();
        $notifications = $user->notifications()->paginate();

        if ($request->expectsJson()) {
            $this->serializeNotifications($notifications);
            return response()->json($notifications);
        }

        return view('viender.notification.notification::index')->with(compact('user', 'notifications'));
    }

    public function serializeNotifications($notifications)
    {
        foreach ($notifications as $notif) {
            switch ($notif->type) {
                case CommentableCommentedNotification::class:
                    $notif->commentable = $notif->data['commentable_type']::with('user')->where('id', $notif->data['commentable_id'])->first();
                    $notif->commentable->user->avatar_url = Storage::url($notif->commentable->user->avatar_url);
                    $notif->commentable->user->avatar_medium_url = Storage::url($notif->commentable->user->avatar_medium_url);
                    $notif->commentable->user->avatar_large_url = Storage::url($notif->commentable->user->avatar_large_url);
                    $notif->commentable->user->avatar_original_url = Storage::url($notif->commentable->user->avatar_original_url);
                    break;
                case QuestionAnsweredNotification::class:
                    $notif->answer = Answer::with('user')->where('id', $notif->data['answer_id'])->first();
                    $notif->answer->user->avatar_url = Storage::url($notif->answer->user->avatar_url);
                    $notif->answer->user->avatar_medium_url = Storage::url($notif->answer->user->avatar_medium_url);
                    $notif->answer->user->avatar_large_url = Storage::url($notif->answer->user->avatar_large_url);
                    $notif->answer->user->avatar_original_url = Storage::url($notif->answer->user->avatar_original_url);
                    break;
                case UpvotableUpvotedNotification::class:
                    $notif->upvotable = $notif->data['upvotable_type']::with('user')->where('id', $notif->data['upvotable_id'])->first();
                    $notif->upvotable->user->avatar_url = Storage::url($notif->upvotable->user->avatar_url);
                    $notif->upvotable->user->avatar_medium_url = Storage::url($notif->upvotable->user->avatar_medium_url);
                    $notif->upvotable->user->avatar_large_url = Storage::url($notif->upvotable->user->avatar_large_url);
                    $notif->upvotable->user->avatar_original_url = Storage::url($notif->upvotable->user->avatar_original_url);
                    break;
                default:
                    # code...
                    break;
            }
        }
    }
}
