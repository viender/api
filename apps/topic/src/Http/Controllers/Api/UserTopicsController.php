<?php

namespace Viender\Topic\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use Viender\Topic\Models\Topic;
use League\Fractal\Resource\Item;
use Viender\Topic\Repositories\TopicsRepository;
use Illuminate\Auth\Access\AuthorizationException;
use Viender\Topic\Transformers\FollowedTopicTransformer;

class UserTopicsController extends ApiController
{
    private $topics;

    public function __construct(TopicsRepository $topics)
    {
        parent::__construct();
        $this->topics = $topics;
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->followedTopics()->paginate(20);

        return $this->respondWithPagination($paginator, new FollowedTopicTransformer);
    }

    /**
     * Follow Topic
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $this->authorize('create', Topic::class);

        if($this->topics->userFollowTopic($user, Topic::findOrFail($request->topic_id))) {
            return $this->respondCreated();
        }

        return $this->respondDeleted();
    }

    /**
     * Unfollow user
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user1, User $user2)
    {

    }
}
