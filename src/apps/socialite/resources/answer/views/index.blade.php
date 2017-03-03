@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
	        <div class="panel panel-default">
	            <div class="panel-body">
				    <table class="table table-hover table-responsive">
				        <thead class="thead-inverse">
				            <tr>
				                <th>Title</th>
				                <th>Bids</th>
				                <th>Number of week</th>
				                <th>Price</th>
				            </tr>
				        </thead>
				        <tbody>
				        	@foreach($tutorings as $tutoring)
					            <tr is="tutoring-row" 
					            	:tutoring="{{ $tutoring }}" 
					            	self-url="{{ route('web.viender.mytutor.tutorings.show', $tutoring->{$tutoring->getRouteKeyName()}) }}"
					            	bid-url="{{ route('web.viender.mytutor.tutorings.bids.create', $tutoring->id) }}"
					            	bidded="{{ $tutoring->auction ? ($tutoring->auction->bids()->where('user_id', \Auth::user()->id)->first() ? true : false) : false }}">	
					            </tr>
					        @endforeach
				        </tbody>
				    </table>

					<div class="pull-right">{{ $tutorings->links() }}</div>
				</div>
	        </div>
        </div>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/answer/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/answer/app.js') }} async="1"></script>
@endsection