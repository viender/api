<?php

namespace Viender\Follow\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Follow\Models\Follow;
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
}
