<?php

namespace Viender\Mytutor\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Viender\Mytutor\Models\Tutoring;
use Viender\Mytutor\Repositories\TutoringsRepository;

class PagesController extends Controller
{
	protected $tutorings;

	function __construct(TutoringsRepository $tutorings)
	{
		$this->tutorings = $tutorings;
        $this->middleware('auth');
	}

    public function dashboard()
    {
    	return view('viender.mytutor.dashboard::index');
    }

    public function feed()
    {
        $tutorings = Tutoring::with('auction.bids')->paginate(15);

        return view('viender.mytutor.feed::index')->with(compact('tutorings'));
    }

    public function postTutoring()
    {
    	return view('viender.mytutor.postTutoring::index');
    }

    public function showTutoring(Tutoring $tutoring)
    {
    	return view('viender.mytutor.showTutoring::index')->with(compact('tutoring'));
    }
}