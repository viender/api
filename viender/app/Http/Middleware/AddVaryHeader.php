<?php

namespace App\Http\Middleware;

use Closure;

class AddVaryHeader
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if (method_exists($response, 'header')) {
            $response->header('Vary', 'User-Agent');
        }

        return $next($request);
    }
}
