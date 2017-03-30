<?php

namespace Viender\Follow\Http\Controllers\Api;

use Illuminate\Http\Request;
use Viender\Topic\Models\Topic;
use League\Fractal\Resource\Item;
use Viender\Follow\Models\Follow;
use Viender\Follow\Models\Following;
use Viender\Follow\Repositories\FollowersRepository;
use Viender\Follow\Transformers\FollowerTransformer;

class TopicFollowersController extends ApiController
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
    public function index(Topic $topic)
    {
        $paginator = $topic->followers()->paginate();

        return $this->respondWithPagination($paginator, new FollowerTransformer);
    }
}
