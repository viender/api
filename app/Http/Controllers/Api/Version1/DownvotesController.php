<?php

namespace App\Http\Controllers\Api\Version1;

use App\Downvote;
use Illuminate\Http\Request;
use App\Viender\Transformers\Version1\DownvoteTransformer;
use App\Http\Controllers\Api\Version1\Handlers\BasicHandler;

class DownvotesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->handler = new BasicHandler($this, Downvote::class, DownvoteTransformer::class);
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
    public function show(Downvote $downvote)
    {
        return $this->handler->show($downvote);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Downvote $downvote)
    {
        return $this->handler->update($request, $downvote);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Downvote $downvote)
    {
        return $this->handler->destroy($downvote);
    }
}