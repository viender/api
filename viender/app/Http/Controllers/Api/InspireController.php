<?php

namespace App\Http\Controllers\Api;

use GuzzleHttp\Client;
use Viender\Address\Http\Controllers\Api\ApiController;

class InspireController extends ApiController
{
    public function index()
    {
        // $start = microtime(true);
        $http = new Client;
        $response = $http->post('http://api.forismatic.com/api/1.0/', [
            'form_params' => [
                'method'    => 'getQuote',
                'key'       => '457653',
                'format'    => 'json',
                'lang'      => 'en'
            ],
        ]);
        return $response;
        $quote = json_decode((string) $response->getBody(), true);
        // $quote['execution_time'] = microtime(true) - $start;
    }
}
