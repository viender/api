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
        if($request->header('Authorization') !== null) {
            $auth = explode(' ', $request->header('Authorization'));
            $authorization = $auth[0] . ' ' . decrypt($auth[1]);
            $request->headers->set('Authorization', $authorization);
        }

        if(isset($request->refresh_token)) {
            try{
                $request->refresh_token = decrypt($request->refresh_token);
            } catch(\Illuminate\Contracts\Encryption\DecryptException $e){ 
                throw new AccessDeniedHttpException;
            }
        }

        return $next($request);
    }
}
