<?php

namespace Viender\Topic;

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

            $this->router->get(
                'topic/{topic}',
                'TopicsController@landingPage'
            )->name('web.viender.topic.pages.topic.show');

            $this->router->get(
                'topic/{topic}/questions',
                'TopicsController@questions'
            )->name('web.viender.topic.pages.topic.questions');

            $this->router->get(
                'topic/{topic}/followers',
                'TopicsController@followers'
            )->name('web.viender.topic.pages.topic.followers');

        });
    }

    public function api()
    {
        $this->version1(['showVersionPrefix' => false]);
    }

    public function version1($option = [])
    {
        $namePrefix = 'api' . (isset($option['showVersionPrefix']) ? ($option['showVersionPrefix'] ? '.v1' : '') : '.v1') . '.viender.topic';

        $this->router->group(array_merge($option, ['domain' => config('viender.api_domain'), 'namespace' => 'Api', 'middleware' => 'api']), function() use ($namePrefix) {

            $this->router->resource(
                'topics',
                'TopicsController',
                [
                    'as' => $namePrefix,
                ]
            );

            $this->router->resource(
                'users.topics',
                'UserTopicsController',
                [
                    'as' => $namePrefix,
                    'only' => ['index', 'show', 'store']
                ]
            );
        });
    }
}
