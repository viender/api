<?php

namespace Viender\Userdata;

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
        $this->router->group(array_merge(['prefix' => 'v1'], $option, ['namespace' => 'Api\Version1']), function() {

            // Models
            $this->router->resource('addresses', 'AddressesController', ['except' => ['create', 'edit']]);
            $this->router->resource('countries', 'CountriesController', ['except' => ['create', 'edit']]);
            $this->router->resource('states', 'StatesController', ['except' => ['create', 'edit']]);
            $this->router->resource('cities', 'CitiesController', ['except' => ['create', 'edit']]);
            $this->router->resource('zipcodes', 'ZipCodesController', ['except' => ['create', 'edit']]);

            // Relationships - User address
            $this->router->resource('users.addresses', 'UserAddressesController', ['except' => ['create', 'edit']]);
            $this->router->resource('countries.addresses', 'CountryAddressesController', ['except' => ['create', 'edit']]);
            $this->router->resource('countries.states', 'CountryStatesController', ['except' => ['create', 'edit']]);
            $this->router->resource('states.addresses', 'StateAddressesController', ['except' => ['create', 'edit']]);
            $this->router->resource('states.cities', 'StateCitiesController', ['except' => ['create', 'edit']]);
            $this->router->resource('cities.addresses', 'CityAddressesController', ['except' => ['create', 'edit']]);
            $this->router->resource('cities.zipcodes', 'CityZipCodesController', ['except' => ['create', 'edit']]);
            $this->router->resource('zipcodes.addresses', 'ZipCodeAddressesController', ['except' => ['create', 'edit']]);
        });
    }
}
