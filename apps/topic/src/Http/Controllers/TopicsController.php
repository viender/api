<?php

namespace Viender\Topic\Http\Controllers;

use Viender\Topic\Models\Topic;

class TopicsController extends Controller
{
	public function landingPage(Topic $topic)
	{
		return $topic;
	}
}
