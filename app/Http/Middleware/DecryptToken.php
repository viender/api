<?php

namespace App\Http\Middleware;

use Closure;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class DecryptToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(\Cookie::get('pt') !== null) {
            $request->headers->set('Authorization', decrypt(\Cookie::get('pt')));
        }

        // return $request->header();

        return $next($request);
    }
}
