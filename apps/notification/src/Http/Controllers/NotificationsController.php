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

        return view('viender.notification.notification::index')->with(compact('user', 'notifications'));
    }
}
