<?php

namespace App\Http\Controllers\Api\Version1;

use App\Upvote;
use Illuminate\Http\Request;
use App\Viender\Transformers\Version1\UpvoteTransformer;
use App\Http\Controllers\Api\Version1\Handlers\BasicHandler;

class UpvotesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Upvote::class, UpvoteTransformer::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->handler->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Upvote $upvote)
    {
        return $this->handler->show($upvote);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Upvote $upvote)
    {
        return $this->handler->update($request, $upvote);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Upvote $upvote)
    {
        return $this->handler->destroy($upvote);
    }
}