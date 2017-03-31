<?php

namespace Viender\Topic\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use Viender\Topic\Models\Topic;
use League\Fractal\Resource\Item;
use Viender\Topic\Repositories\TopicsRepository;
use Viender\Topic\Transformers\TopicTransformer;
use Illuminate\Auth\Access\AuthorizationException;

class TopicsController extends ApiController
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
    public function index()
    {
        $paginator = Topic::paginate(20);

        return $this->respondWithPagination($paginator, new TopicTransformer);
    }

    /**
     * Follow Topic
     * 
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('create', Topic::class);

        
    }

    public function show(Topic $topic)
    {
        return $this->respond(new Item($topic, new TopicTransformer));
    }

    public function edit(Topic $topic)
    {

    }

    public function update(Request $request, Topic $topic)
    {

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