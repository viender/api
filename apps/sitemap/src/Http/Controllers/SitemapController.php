<?php

namespace Viender\Sitemap\Http\Controllers;

use Viender\Topic\Models\Topic;


class SitemapController extends Controller
{

	public function index()
	{
        $roots = Topic::where('class', 'root')->get();

		return view('viender.sitemap.sitemap::index')->with(compact('roots'));
	}

    public function recent()
    {
        $roots = Topic::where('class', 'root')->get();

        return view('viender.sitemap.sitemap::recent')->with(compact('roots'));
    }

    public function questions()
    {
        $roots = Topic::where('class', 'root')->get();

        return view('viender.sitemap.sitemap::questions')->with(compact('roots'));
    }

    public function topics()
    {
        $roots = Topic::where('class', 'root')->get();

        return view('viender.sitemap.sitemap::topics')->with(compact('roots'));
    }

    public function people()
    {
        $roots = Topic::where('class', 'root')->get();

        return view('viender.sitemap.sitemap::people')->with(compact('roots'));
    }
}
