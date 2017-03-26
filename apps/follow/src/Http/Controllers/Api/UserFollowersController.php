<?php

namespace Viender\Socialite\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Follow\Models\Follower;
use Viender\Follow\Models\Following;
use Viender\Follow\Repositories\FollowersRepository;
use Viender\Follow\Transformers\FollowerTransformer;

class UserFollowersController extends ApiController
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
        $paginator = $user->followers()->paginate();

        return $this->respondWithPagination($paginator, new FollowerTransformer);
    }

    /**
     * Follow user
     * 
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $follower = $this->followers->userFollowUser($user, User::find($request->follower_id));
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
