<?php

namespace Viender\Campaign\Http\Middleware;

use Closure;
use Viender\Campaign\Models\Campaign;

class CheckCampaign
{
    public function handle($request, Closure $next)
    {
        if ($request->cpgn) {
            $campaign = Campaign::find($request->cpgn);

            if ($campaign) {
                if (!$campaign->finish) {
                    $campaign->hit_count += 1;
                    $campaign->save();
                }
            }
        }

        return $next($request);
    }
}
