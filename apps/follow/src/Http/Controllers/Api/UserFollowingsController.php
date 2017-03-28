<?php

namespace Viender\Follow\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Follow\Models\Follower;
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
        $this->authorize('create', Follower::class);

        if(\Auth::user()->id !== $user->id) throw new AuthorizationException('This action is unauthorized.');

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
        $this->authorize('delete', $user1->followings()->where([
            'followee_id'   => $user2->id, 
            'followee_type' => User::class])->firstOrFail()
        );

        $this->followers->userUnfollowUser($user1, $user2);
        
        return $this->respondDeleted();
    }
}
