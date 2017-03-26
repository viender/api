<?php

namespace Viender\Socialite\Http\Controllers\Api;

use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Follow\Models\Follower;
use Viender\Follow\Models\Following;
use Viender\Follow\Transformers\FollowingTransformer;

class UserFollowersController extends ApiController
{
    private $followings;

    public function __construct(FollowersRepository $followings)
    {
        parent::__construct();
        $this->followings = $followings;
    }

    /** 
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = $user->followings()->paginate();

        return $this->respondWithPagination($paginator, new FollowingTransformer);
    }

    /**
     * Follow user
     * 
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $follower = $this->followings->userFollowUser($user, User::find($request->follower_id));
        return $follower;
    }

    /**
     * Unfollow user
     * 
     * @return \Illuminate\Http\Response
     */
    public function destroy(Follower $follower)
    {
        $upvotes = $answer->upvotes()->findOrFail($upvotes);

        $upvotes->delete();

        return $this->respondDeleted();
    }
}
