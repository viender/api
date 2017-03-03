@extends('layouts.app')

@section('content')
<div class="container">
    <table class="bordered">
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
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/mytutor/feed/app.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/mytutor/feed/app.js') }} async="1"></script>
@endsection