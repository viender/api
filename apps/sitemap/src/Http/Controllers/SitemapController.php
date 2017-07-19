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

    public function indexXml()
    {
        $categories = Category::where('id', '>', 5)->get();

        $content = \View::make('viender.sitemap.sitemap::xml.index')->with(compact('categories'));

        return \Response::make($content, '200')->header('Content-Type', 'text/xml');
    }

    public function answersXml()
    {
        $answers = Answer::latest()->get();

        $content = \View::make('viender.sitemap.sitemap::xml.answers')->with(compact('answers'));

        return \Response::make($content, '200')->header('Content-Type', 'text/xml');
    }

    public function questionsXml()
    {
        $questions = Question::all();

        $content = \View::make('viender.sitemap.sitemap::xml.questions')->with(compact('questions'));

        return \Response::make($content, '200')->header('Content-Type', 'text/xml');
    }

    public function topicsXml()
    {
        $topics = Topic::all();

        $content = \View::make('viender.sitemap.sitemap::xml.topics')->with(compact('topics'));

        return \Response::make($content, '200')->header('Content-Type', 'text/xml');
    }

    public function peopleXml()
    {
        $users = User::all();

        $content = \View::make('viender.sitemap.sitemap::xml.users')->with(compact('users'));

        return \Response::make($content, '200')->header('Content-Type', 'text/xml');
    }
}
