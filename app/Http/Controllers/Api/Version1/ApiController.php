<?php

namespace App\Http\Controllers\Api\Version1;

use Response;
use League\Fractal\Manager;
use App\Http\Controllers\Controller;
use League\Fractal\Resource\Collection;
use Illuminate\Foundation\Bus\DispatchesJobs;
use League\Fractal\Serializer\ArraySerializer;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class ApiController extends Controller
{
    protected $handler;
    
    protected $statusCode = 200;

    protected $fractal;

    public function __construct()
    {
        $this->middleware('auth:api')->except('index', 'show');
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

    public function respondNotFound($message = "Not found!") 
    {
        return $this->setStatusCode(404)->respondWithMessage($message);
    }

    public function respondCreated($message = "Created!") 
    {
        return $this->respondWithMessage($message);
    }

    public function respondUpdated($message = "Updated!") 
    {
        return $this->respondWithMessage($message);
    }

    public function respondDeleted($message = "Deleted!") 
    {
        return $this->respondWithMessage($message);
    }

    public function respondWithPagination($paginator, $transformer) 
    {
        $items = $paginator->getCollection();
        $resource = new Collection($items, $transformer);
        $resource->setPaginator(new IlluminatePaginatorAdapter($paginator));

        return $this->respond($resource);
    }

}
