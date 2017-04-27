<?php

namespace Viender\Feed\Http\Controllers\Api;

use Response;
use League\Fractal\Manager;
use Viender\Feed\Http\Controllers\Controller;
use League\Fractal\Resource\Collection;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use Viender\Feed\Transformers\Serializer\ArraySerializer;

class ApiController extends Controller
{
    protected $handler;
    
    protected $statusCode = 200;

    protected $fractal;

    public function __construct()
    {
        $this->middleware('auth:api');
        $this->fractal  = new Manager();
        $this->fractal->setSerializer(new ArraySerializer());
        if (isset($_GET['with'])) {
            $this->fractal->parseIncludes($_GET['with']);
        }
    }

    /**
     * Gets the value of statusCode.
     *
     * @return mixed
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * Sets the value of statusCode.
     *
     * @param mixed $statusCode the status code
     *
     * @return self
     */
    protected function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;

        return $this;
    }

    public function respond($resource, $header = []) 
    {
        $data = is_array($resource) ? $resource :  $this->fractal->createData($resource)->toArray();
        return Response::json($data, $this->getStatusCode(), $header);
    }

    public function respondWithMessage($message) 
    {
        return $this->respond([
            'message' => $message,
            'status_code' => $this->getStatusCode(),
        ]);
    }

    public function respondNotFound($message = "Not Found", $status_code = 404) 
    {
        return $this->setStatusCode($status_code)->respondWithMessage($message);
    }

    public function respondCreated($message = "Created", $status_code = 201) 
    {
        return $this->setStatusCode($status_code)->respondWithMessage($message);
    }

    public function respondUpdated($message = "Updated", $status_code = 200) 
    {
        return $this->setStatusCode($status_code)->respondWithMessage($message);
    }

    public function respondDeleted($message = "Deleted", $status_code = 204) 
    {
        return $this->setStatusCode($status_code)->respondWithMessage($message);
    }

    public function respondWithPagination($paginator, $transformer) 
    {
        $items = $paginator->getCollection();
        $resource = new Collection($items, $transformer);
        $resource->setPaginator(new IlluminatePaginatorAdapter($paginator));

        return $this->respond($resource);
    }

}
