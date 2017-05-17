<?php

namespace Viender\Campaign\Http\Middleware;

use Closure;
use Viender\Campaign\Models\Campaign;
use Viender\Campaign\Models\CampaignHit;

class CheckCampaign
{
    public function handle($request, Closure $next)
    {
        if ($request->cpgn) {
            $campaign = Campaign::find($request->cpgn);

            if ($campaign) {
                if (!$campaign->finish) {
                    $campaign->campaignHits()->save(new CampaignHit);
                }
            }
        }

        return $next($request);
    }
}
