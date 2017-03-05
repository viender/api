<?php

namespace Viender\Utilities\Controllers\Handlers;

use Illuminate\Http\Request;
use League\Fractal\Resource\Item;

class Handler
{
    protected $controller;
    protected $model;
    protected $transformer;

    public function __construct($controller, $model, $transformer)
    {
        $this->controller = $controller;
        $this->model = $model;
        $this->transformer = $transformer;
    }
}