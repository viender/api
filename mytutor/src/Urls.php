<?php

namespace Viender\Mytutor;

use Illuminate\Contracts\Routing\Registrar as Router;

class Urls
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
        $this->web();
        $this->api();
    }

    public function web($option = [])
    {
        $this->router->group(array_merge($option, ['domain' => config('app.domain'), 'middleware' => 'web']), function() {

            $this->router->get('/tutorings', 'PagesController@feed')->name('web.viender.mytutor.tutorings.index');

            $this->router->get('/dashboard', 'PagesController@dashboard')->name('web.viender.mytutor.dashboard');

            $this->router->group(['middleware' => 'auth'], function() {
                $this->router->resource('tutorings', 'Api\TutoringsController', [
                    'as'        => 'web.viender.mytutor',
                    'only'    => ['show', 'create', 'store']
                ]);
            });

            $this->router->get('tutorings/{tutoring}/bids', function() {abort(404);})->name('web.viender.mytutor.tutorings.bids.index');

            $this->router->group(['middleware' => 'auth'], function() {
                $this->router->resource('tutorings/{tutoring}/bids', 'Api\TutoringBidsController', [
                    'as'        => 'web.viender.mytutor.tutorings',
                    'only'    => ['show', 'create', 'store']
                ]);
            });
        });
    }

    public function api($option = [])
    {
        $this->apiVersion1(['showVersionPrefix' => false]);
    }

    public function apiVersion1($option = [])
    {
        $namePrefix = 'api' . (isset($option['showVersionPrefix']) ? ($option['showVersionPrefix'] ? '.v1' : '') : '.v1') . '.viender.mytutor';

        $this->router->group(array_merge($option, ['domain' => config('app.api_domain'), 'namespace' => 'Api', 'middleware' => 'api']), function() use ($namePrefix) {

            $this->router->get('tutorings', 'TutoringsController@index')->name($namePrefix . '.tutorings.index');

            $this->router->get('tutorings/{tutoring}', 'TutoringsController@show')->name($namePrefix . '.tutorings.show');

            $this->router->group(['middleware' => 'auth:api'], function() use ($namePrefix) {
                $this->router->resource('tutorings', 'TutoringsController', [
                    'as'        => $namePrefix,
                    'only'    => ['store', 'update', 'destroy']
                ]);
            });

            $this->router->get('tutorings/{tutoring}/bids', 'TutoringBidsController@index')->name($namePrefix . '.tutorings.bids.index');

            $this->router->get('tutorings/{tutoring}/bids/{bid}', 'TutoringBidsController@show')->name($namePrefix . '.tutorings.bids.show');

            $this->router->group(['middleware' => 'auth:api'], function() use ($namePrefix) {
                $this->router->resource('tutorings.bids', 'TutoringBidsController', [
                    'as'        => $namePrefix,
                    'only'    => ['store', 'update', 'destroy']
                ]);
            });
        });
    }
}
