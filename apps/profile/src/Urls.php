<?php

namespace Viender\Profile;

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
            $this->router->get(
                '/{user}', 
                'ProfileController@profile')
            ->name('web.viender.profile.pages.profile');

            $this->router->get(
                '/{user}/questions',
                'ProfileController@questions')
            ->name('web.viender.profile.pages.questions');

            $this->router->get(
                '/{user}/topics', 
                'ProfileController@topics')
            ->name('web.viender.profile.pages.topics');

            $this->router->get(
                '/{user}/followings', 
                'ProfileController@followings')
            ->name('web.viender.profile.pages.followings');

            $this->router->get(
                '/{user}/followers', 
                'ProfileController@followers')
            ->name('web.viender.profile.pages.followers');
        });
    }

    public function api()
    {
        $this->version1(['showVersionPrefix' => false]);
    }

    public function version1($option = [])
    {
        $namePrefix = 'api' . (isset($option['showVersionPrefix']) ? ($option['showVersionPrefix'] ? '.v1' : '') : '.v1') . '.viender.socialite';

        $this->router->group(array_merge($option, ['domain' => config('app.api_domain'), 'namespace' => 'Api', 'middleware' => 'api']), function() use ($namePrefix) {


        });
    }
}
