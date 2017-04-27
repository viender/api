<?php

namespace Viender\Feed;

use GuzzleHttp\Client as GuzzleHttpClient;
use Illuminate\Support\Facades\Route;

class Client
{
    protected $client;

    public function __construct()
    {
        $this->client = new GuzzleHttpClient();
    }

    public function fetch()
    {
        $res = $this->client->request('GET', config('services.viender.feed.url'));
        return $res->getBody();
    }
}
