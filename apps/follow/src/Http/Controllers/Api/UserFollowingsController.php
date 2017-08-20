<?php

namespace Viender\Follow\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Follow\Models\Follow;
use Illuminate\Auth\Access\AuthorizationException;
use Viender\Follow\Repositories\FollowersRepository;
use Viender\Follow\Transformers\FollowingTransformer;

class UserFollowingsController extends ApiController
{
    private $followers;

    public function __construct(FollowersRepository $followers)
    {
        parent::__construct();
        $this->followers = $followers;
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->followedUsers()->paginate(20);

        return $this->respondWithPagination($paginator, new FollowingTransformer);
    }

    /**
     * Follow user
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $this->authorize('create', Follow::class);

        if(\Auth::user()->id !== $user->id) throw new AuthorizationException('This action is unauthorized.');

        if(\Auth::user()->id == $request->followee_id) abort(422, 'Cannot follow your self');

        if($this->followers->userFollowUser($user, User::find($request->followee_id))) {
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
        $this->authorize('delete', $user1->followedUsers()->where([
            'followable_id'   => $user2->id,
        ])->firstOrFail());

        $this->followers->userUnfollowUser($user1, $user2);

        return $this->respondDeleted();
    }

    /**
     * Check following status
     *
     * @return \Illuminate\Http\Response
     */
    public function check(Request $request, User $follower, User $followee) {
        $followingStatus = $follower->followedUsers()->where([
            'user_id'           => $follower->id,
            'followable_id'     => $followee->id,
            'followable_type'   => User::class,
        ])->exists();

        return $this->respond([
            'following_status' => $followingStatus,
            'status_code' => $this->getStatusCode(),
        ]);
    }
}
