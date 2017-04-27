<?php

namespace Viender\Feed\Http\Controllers\Api;

use Viender\Feed\Client;

class FeedController extends ApiController
{
    protected $feedClient;

    public function __construct(Client $client)
    {
        parent::__construct();
        $this->feedClient = $client;
    }

    public function index()
    {
        return response($this->feedClient->fetch())->header('Content-Type', 'application/json');
    }
}
