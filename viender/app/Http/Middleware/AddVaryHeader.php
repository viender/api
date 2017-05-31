<?php

namespace App\Http\Middleware;

use Closure;

class AddVaryHeader
{
    public function handle($request, Closure $next)
    {
        if (method_exists($request, 'header')) {
            $request->header('Vary', 'User-Agent');
        }

        return $next($request);
    }
}
