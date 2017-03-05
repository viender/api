<?php 

namespace Viender\Mytutor\Repositories;

use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use Bosnadev\Repositories\Eloquent\Repository as BaseRepository;

abstract class Repository extends BaseRepository
{
	protected $transformer = '';

    public function transformAll($option = [])
    {
    	$fractal  = new Manager();
    	$fractal->setSerializer(new ArraySerializer());
        if (isset($option['with'])) {
            $fractal->parseIncludes($option['with']);
        }

        $model = $this->model();
        $paginator = $model::paginate();

        $items = $paginator->getCollection();
        $resource = new Collection($items, new $this->transformer);
        $resource->setPaginator(new IlluminatePaginatorAdapter($paginator));

        return $fractal->createData($resource);
    }
}