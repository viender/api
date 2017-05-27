<?php

namespace Viender\Notification\Http\Controllers\Api;

use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Illuminate\Container\Container;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Upvote;
use Illuminate\Support\Facades\Storage;
use Viender\Socialite\Events\UpvotableUpvoted;
use Illuminate\Notifications\DatabaseNotification;
use Viender\Socialite\Repositories\UpvotesRepository;
use Viender\Socialite\Transformers\UpvoteTransformer;
use Viender\Notification\Transformers\NotificationTransformer;
use Viender\Socialite\Notifications\QuestionAnsweredNotification;
use Viender\Socialite\Notifications\UpvotableUpvotedNotification;
use Viender\Socialite\Notifications\CommentableCommentedNotification;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class NotificationsController extends ApiController
{
    private $upvotes;

    public function __construct(UpvotesRepository $upvotes)
    {
        parent::__construct();
        $this->upvotes = $upvotes;
    }

    /**
     * @api {get} /answers/:id/upvotes Get Answer Upvotes
     * @apiName AnswerUpvotesIndex
     * @apiGroup AnswerGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiUse UpvoteIndexSuccess
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->input('count_only')) {
            $user = \Auth::user();

            $notificationCount = $user->notifications()->where('read_at', '=', null)->count();

            return response()->json([
                'count' => $notificationCount,
            ]);
        }

        $paginator = \Auth::user()->notifications()->latest('created_at')->paginate($request->input('per_page') ?? 15);

        return $this->respondWithPagination($paginator, new NotificationTransformer);
    }

    public function readAll(Request $request)
    {
        if (!\Auth::user()) abort(403);

        foreach (\Auth::user()->notifications()->get() as $notification) {
            $notification->markAsRead();
        }

        return response()->json(['success' => true]);
    }

    public function read(Request $request, DatabaseNotification $notification)
    {
        if (\Auth::user()->id !== $notification->notifiable_id) abort(403);

        $notification->markAsRead();

        return response()->json(['success' => true]);
    }
}
