<?php

namespace Viender\Topic\Http\Controllers;

use Viender\Topic\Models\Topic;

class TopicsController extends Controller
{
	public function landingPage(Topic $topic)
	{
		return view('viender.topic.topic::index')->with(compact('topic'));
	}

	public function questions(Topic $topic)
	{
		return view('viender.topic.topic::questions')->with(compact('topic'));
	}

	public function followers(Topic $topic)
	{
		return view('viender.topic.topic::followers')->with(compact('topic'));
	}
}
