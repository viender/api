<?php

namespace Viender\Campaign\Http\Controllers;

use Illuminate\Http\Request;
use Viender\Campaign\Models\Campaign;

class CampaignController extends Controller
{
	public function index()
	{
        $campaigns = Campaign::all();
		return view('viender.campaign.campaign::index')->with(compact('campaigns'));
	}

    public function store(Request $request)
    {
        // TODO: somehow request to this route get called twice, this is just
        // temporary workaround.
        if (!Campaign::where('name', $request->name)->exists()) {
            Campaign::create($request->all());
        }

        return redirect()->back();
    }

    public function reset(Request $request, Campaign $campaign)
    {
        foreach ($campaign->campaignHits()->get() as $hit) {
            $hit->delete();
        }

        return redirect()->back();
    }

    public function finish(Request $request, Campaign $campaign)
    {
        $campaign->finish = true;
        $campaign->save();

        return redirect()->back();
    }

    public function unfinish(Request $request, Campaign $campaign)
    {
        $campaign->finish = false;
        $campaign->save();

        return redirect()->back();
    }

    public function destroy(Request $request, Campaign $campaign)
    {
        $campaign->delete();

        return redirect()->back();
    }
}
