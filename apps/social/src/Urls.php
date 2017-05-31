<?php

namespace Viender\Social;

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
        $this->router->group(array_merge($option, ['domain' => config('viender.web_domain'), 'middleware' => 'web']), function() {

            $this->router->get('login/google', 'Auth\GoogleLoginController@handle')->name('web.viender.social.login.google');
            $this->router->get('login/google/callback', 'Auth\GoogleLoginController@callback')->name('web.viender.social.login.google.callback');;

            $this->router->get('login/facebook', 'Auth\FacebookLoginController@handle')->name('web.viender.social.login.facebook');
            $this->router->get('login/facebook/callback', 'Auth\FacebookLoginController@callback')->name('web.viender.social.login.facebook.callback');
        });
    }

    public function api()
    {
        $this->version1(['showVersionPrefix' => false]);
    }

    public function version1($option = [])
    {
        $namePrefix = 'api' . (isset($option['showVersionPrefix']) ? ($option['showVersionPrefix'] ? '.v1' : '') : '.v1') . '.viender.social';

        $this->router->group(array_merge($option, ['domain' => config('viender.api_domain'), 'namespace' => 'Api', 'middleware' => 'api']), function() use ($namePrefix) {

        });
    }
}
