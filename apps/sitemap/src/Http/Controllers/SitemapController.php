<?php

namespace Viender\Sitemap\Http\Controllers;

use App\User;
use Viender\Topic\Models\Topic;
use Viender\Topic\Models\Category;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Question;


class SitemapController extends Controller
{
	public function index()
	{
        $categories = Category::where('id', '>', 5)->get();

		return view('viender.sitemap.sitemap::index')->with(compact('categories'));
	}

    public function recent()
    {
        $questions = Question::latest()->paginate(40);

        return view('viender.sitemap.sitemap::recent')->with(compact('questions'));
    }

    public function questions()
    {
        $questions = Question::latest()->paginate(40);

        return view('viender.sitemap.sitemap::questions')->with(compact('questions'));
    }

    public function topics()
    {
        $topics = Topic::paginate(40);

        return view('viender.sitemap.sitemap::topics')->with(compact('topics'));
    }

    public function people()
    {
        $users = User::paginate(40);

        return view('viender.sitemap.sitemap::people')->with(compact('users'));
    }
}
