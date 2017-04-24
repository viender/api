<?php

namespace App\Http\Controllers;


class ServiceWorkerController extends Controller
{
    public function index()
    {
        $contents = \View::make('viender::sw-js');
        $response = \Response::make($contents, 200);
        $response->header('Content-Type', 'application/javascript');
        return $response;
    }
}
