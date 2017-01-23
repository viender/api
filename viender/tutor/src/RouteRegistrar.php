<?php

namespace Viender\Tutor;

use Illuminate\Contracts\Routing\Registrar as Router;

class RouteRegistrar
{
    /**
     * The router implementation.
     *
     * @var Router
     */
    protected $router;

    /**
     * Create a new route registrar instance.
     *
     * @param  Router  $router
     * @return void
     */
    public function __construct(Router $router)
    {
        $this->router = $router;
    }

    /**
     * Register routes for transient tokens, clients, and personal access tokens.
     *
     * @return void
     */
    public function all()
    {
        $this->head();
        $this->version1();
    }

    public function head()
    {
        $this->version1(['prefix' => '']);
    }

    public function version1($option = [])
    {
        $this->router->group(array_merge(['prefix' => 'v1'], $option, ['namespace' => 'Api']), function() {
            
        });
    }
}
