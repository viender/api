@extends('viender::layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
        	<div class="panel panel-default">
            	<div class="panel-heading">
                    <span>{{ $tutoring->auction->title }}</span>
                    @if( $tutoring->student->id != \Auth::user()->id )
                        @if( $tutoring->auction->bids()->where('user_id', \Auth::user()->id)->exists() )
                            <span class="pull-right">You already bid this job</span>
                        @else
                            <span class="pull-right"><a class="btn btn-default inline" href="{{ route('web.viender.mytutor.tutorings.bids.create', $tutoring->{$tutoring->getRouteKeyName()}) }}">Bid now</a></span>
                        @endif
                    @endif
                </div>
                <div class="panel-body">
                	<div>
                		<span>Price: </span>
                		<span>{{ $tutoring->auction->price }}</span>
                	</div>
                	<div>
                		<span>Number of week: </span>
                		<span>{{ $tutoring->number_of_week }}</span>
                	</div><br>
                	<div>
                		{{ $tutoring->auction->body }}
                	</div>
                </div>
            </div>

            <div class="panel panel-default">
            	<div class="panel-heading">
                    <span>Bids</span>
                </div>
                <div class="panel-body">
                    @if($tutoring->auction->bids->count() > 0)
				    <table class="table table-hover table-responsive">
				        <thead class="thead-inverse">
				            <tr>
				                <th>Name</th>
				                <th>Offered Price</th>
				            </tr>
				        </thead>
				        <tbody>
				        	@foreach($tutoring->auction->bids()->with('bidder')->get() as $bid)
					            <tr is="bid-row" 
                                    :bid="{{ $bid }}" 
                                    my-tutoring="{{ $tutoring->student_id == \Auth::user()->id }}"
                                    self-url="{{ route('web.viender.mytutor.tutorings.bids.show', [$tutoring->id, $bid->id]) }}"
                                    accepted="{{ $bid->accepted }}">
                                </tr>
					        @endforeach
				        </tbody>
                    </table>
                    @else
                    <div>
                        No bid yet.
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/mytutor/showTutoring/app.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/mytutor/showTutoring/app.js') }} async="1"></script>
@endsection