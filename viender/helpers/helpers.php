<?php

use Jenssegers\Agent\Agent;
use Illuminate\Contracts\View\Factory as ViewFactory;
use InvalidArgumentException;

if (! function_exists('view')) {
    /**
     * Get the evaluated view contents for the given view.
     *
     * @param  string  $view
     * @param  array   $data
     * @param  array   $mergeData
     * @return \Illuminate\View\View|\Illuminate\Contracts\View\Factory
     */
    function view($view = null, $data = [], $mergeData = [])
    {
        $agent = new Agent();

        $factory = app(ViewFactory::class);

        if (func_num_args() === 0) {
            return $factory;
        }

        if( ! $agent->isDesktop()) {
            try {
                $a = $factory->make($view . '-mobile', $data, $mergeData);
                return $a;
            } catch (InvalidArgumentException $e) {
                return $factory->make($view, $data, $mergeData);
            }
        }

        return $factory->make($view, $data, $mergeData);
    }
}