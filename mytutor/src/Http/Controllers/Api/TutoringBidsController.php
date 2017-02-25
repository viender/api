<?php

namespace Viender\Mytutor\Http\Controllers\Api;

use Viender\Dealer\Bid;
use Viender\Dealer\Auction;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Mytutor\Models\Tutoring;
use Viender\Mytutor\Http\Requests\StoreBid;
use Viender\Dealer\Transformers\BidTransformer;
use Viender\Mytutor\Repositories\TutoringsRepository;

class TutoringBidsController extends ApiController
{
    private $tutorings;

    public function __construct(TutoringsRepository $tutorings)
    {
        parent::__construct();
        $this->tutorings = $tutorings;
    }
    
    /** 
     * @api {get} /auctions/:id/bids Get Auction Bids
     * @apiName AuctionBidsIndex
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse BidIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(Tutoring $tutoring)
    {
        $auction = $tutoring->auction;

        $paginator = $auction->bids()->paginate();

        return $this->respondWithPagination($paginator, new BidTransformer);
    }

    public function create(Tutoring $tutoring)
    {
        return view('viender.mytutor.postBid::index')->with(compact('tutoring'));
    }

    /**
     * @api {post} /auctions/:id/bids Create Auction Bid
     * @apiName AuctionBidsStore
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse BidRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBid $request, Tutoring $tutoring)
    {
        $this->tutorings->createBid($request->all(), $tutoring);

        if ($request->expectsJson()) {
            return $this->respondCreated();
        }

        return redirect(route('web.viender.mytutor.tutorings.show', $tutoring->{$tutoring->getRouteKeyName()}));
    }

    /**
     * @api {get} /auctions/:id/bids/:id Get Auction Bid
     * @apiName AuctionBidsShow
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse BidShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Tutoring $tutoring, $bid)
    {
        $auction = $tutoring->auction;

        $bid = $auction->bids()->findOrFail($bid);

        if ($request->expectsJson()) {
            return $this->respond(new Item($bid, new BidTransformer));
        }

        return view('viender.mytutor.showBid::index')->with(compact(['tutoring', 'bid']));
    }

    /**
     * @api {put} /auctions/:id/bids/:id Update Auction Bid
     * @apiName AuctionBidsUpdate
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse BidRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tutoring $tutoring, $bid)
    {
        $auction = $tutoring->auction;

        $bid = $auction->bids()->findOrFail($bid);
        
        $bid->update($request->all());

        return $this->respondUpdated();
    }

    /**
     * @api {delete} /auctions/:id/bids/:id Delete Auction Bid
     * @apiName AuctionBidsDelete
     * @apiGroup AuctionGroup
     * @apiVersion 1.0.0
     * @apiDescription Delete an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tutoring $tutoring, $bid)
    {
        $auction = $tutoring->auction;

        $bid = $auction->bids()->findOrFail($bid);

        $bid->delete();

        return $this->respondDeleted();
    }
}