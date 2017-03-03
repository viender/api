@extends('layouts.app')

@section('head')

@endsection

@section('content')
<div id="viender_mytutor_postTutoring" class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
	        <div class="panel panel-default">
	        	<div class="panel-heading">
	                <span>Bid by </span>
	                <span>{{ $bid->bidder->fullName() }}</span>
	                <span class="pull-right"><a class="btn btn-default" style="display: inline;" href="">Accept</a></span>
	            </div>
	            <div class="panel-body">
	            	<div>
	            		<span><strong>Offered Price: </strong></span>
	            		<span>{{ $bid->offered_price }}</span>
	            	</div>
	            	<br>
	            	<div>
	            		<div><strong>Proposal: </strong></div>
	            		<div>{{ $bid->proposal }}</div>
	            	</div>
	            </div>
	        </div>
        </div>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/mytutor/showBid/app.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/mytutor/showBid/app.js') }} async="1"></script>
@endsection