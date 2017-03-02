<?php

namespace Viender\Dealer;

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

    public function web($option = [])
    {
        $this->router->group(array_merge(['prefix' => 'v1'], $option, ['middleware' => 'web']), function(){
            $this->router->resource('post-project', 'DealerController@postProject');
        });
    }

    public function head()
    {
        $this->version1(['prefix' => '']);
    }

    public function version1($option = [])
    {
        $this->router->group(array_merge(['prefix' => 'v1'], $option, ['namespace' => 'Api', 'middleware' => 'api']), function(){

            // Models
            $this->router->resource('auctions', 'AuctionsController', ['except' => ['create', 'edit']]);
            $this->router->resource('bids', 'BidsController', ['except' => ['create', 'edit']]);

            // Relationships
            $this->router->resource('auctions.tags', 'AuctionTagsController', ['except' => ['create', 'edit']]);
            $this->router->resource('tags.auctions', 'TagAuctionsController', ['except' => ['create', 'edit']]);

            $this->router->resource('users.auctions', 'UserAuctionsController', ['except' => ['create', 'edit']]);
            $this->router->resource('users.bids', 'UserBidsController', ['except' => ['create', 'edit']]);
            $this->router->resource('auctions.bids', 'AuctionBidsController', ['except' => ['create', 'edit']]);
        });
    }
}
