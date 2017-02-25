<?php

namespace Viender\Mytutor\Repositories;

use App\User;
use Carbon\Carbon;
use Viender\Dealer\Bid;
use Viender\Dealer\Auction;
use Illuminate\Http\Request;
use Viender\Mytutor\Models\Schedule;
use Viender\Mytutor\Models\Tutoring;

class TutoringsRepository extends Repository
{
    protected $transformer = 'Viender\Mytutor\Transformers\TutoringTransformer';

    public function model()
    {
        return 'Viender\Mytutor\Models\Tutoring';
    }

    public function create(array $request)
    {
        $user = \Auth::user();

        $tutoring = $user->tutoringAsStudents()->save(new Tutoring($request));

        $auction = new Auction($request);

        $auction->slug = sha1(Carbon::now());

        $auction->auctionable()->associate($tutoring);

        $user->auctions()->save($auction);

        if(isset($request['schedules'])) {
            foreach ($request['schedules'] as $schedule) {
                if($schedule['from'] == '' || $schedule['to'] == '') {
                    continue;
                }
                $tutoring->schedules()->save(new Schedule($schedule));
            }
        }

        return $tutoring;
    }

    public function createBid(array $request, Tutoring $tutoring)
    {
        $auction = $tutoring->auction;

        $bid = new Bid($request);

        $bid->bidder()->associate(\Auth::user());

        $bid->title = '';

        return $auction->bids()->save($bid);
    }
}