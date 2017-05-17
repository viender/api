<?php

namespace Viender\Campaign;

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
            $this->router->get('campaigns', 'CampaignController@index')->name('web.viender.campaign.index');
            $this->router->post('campaigns/{campaign}/reset', 'CampaignController@reset')->name('web.viender.campaign.reset');
            $this->router->post('campaigns/{campaign}/finish', 'CampaignController@finish')->name('web.viender.campaign.finish');
            $this->router->post('campaigns/{campaign}/unfinish', 'CampaignController@unfinish')->name('web.viender.campaign.unfinish');
            $this->router->delete('campaigns/{campaign}', 'CampaignController@destroy')->name('web.viender.campaign.destroy');
            $this->router->post('campaigns', 'CampaignController@store')->name('web.viender.campaign.store');
        });
    }

    public function api()
    {
        $this->version1(['showVersionPrefix' => false]);
    }

    public function version1($option = [])
    {
        $namePrefix = 'api' . (isset($option['showVersionPrefix']) ? ($option['showVersionPrefix'] ? '.v1' : '') : '.v1') . '.viender.campaign';

        $this->router->group(array_merge($option, ['domain' => config('viender.api_domain'), 'namespace' => 'Api', 'middleware' => 'api']), function() use ($namePrefix) {

        });
    }
}
