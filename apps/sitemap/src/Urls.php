<?php

namespace Viender\Sitemap;

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
        $this->xml();
        $this->api();
    }

    public function web($option = [])
    {
        $this->router->group(array_merge($option, ['domain' => config('viender.web_domain'), 'middleware' => 'web']), function() {
            $this->router->get('/sitemap', 'SitemapController@index')->name('web.viender.sitemap.sitemap.index');
            $this->router->get('/sitemap/recent', 'SitemapController@recent')->name('viender.sitemap.sitemap.recent');
            $this->router->get('/sitemap/questions', 'SitemapController@questions')->name('viender.sitemap.sitemap.questions');
            $this->router->get('/sitemap/topics', 'SitemapController@topics')->name('viender.sitemap.sitemap.topics');
            $this->router->get('/sitemap/people', 'SitemapController@people')->name('viender.sitemap.sitemap.people');
        });
    }

    public function xml($option = [])
    {
        $this->router->group(array_merge($option, ['domain' => config('viender.web_domain'), 'middleware' => 'web']), function() {

            // $this->router->get('/sitemap-answers.xml.gz', 'SitemapXmlController@answers')->name('viender.sitemap.answers.index');

            $this->router->get('/sitemap-questions.xml.gz', 'SitemapXmlController@questions')->name('viender.sitemap.questions.index');

            $this->router->get('/sitemap-topics.xml.gz', 'SitemapXmlController@topics')->name('viender.sitemap.topics.index');

            $this->router->get('/sitemap-people.xml.gz', 'SitemapXmlController@people')->name('viender.sitemap.people.index');

            $this->router->get('/sitemap.xml.gz', 'SitemapXmlController@index')->name('viender.sitemap.sitemap.index');
        });
    }

    public function api()
    {
        $this->version1(['showVersionPrefix' => false]);
    }

    public function version1($option = [])
    {
        $namePrefix = 'api' . (isset($option['showVersionPrefix']) ? ($option['showVersionPrefix'] ? '.v1' : '') : '.v1') . '.viender.sitemap';

        $this->router->group(array_merge($option, ['domain' => config('viender.api_domain'), 'namespace' => 'Api', 'middleware' => 'api']), function() use ($namePrefix) {

        });
    }
}
