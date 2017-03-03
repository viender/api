@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-4">
	        <div class="panel panel-default">
	            <div class="panel-body">
	        		<a href="{{ route('web.viender.mytutor.tutorings.index') }}">
		            	<img src="/img/sample1.jpg" alt="lake and mountain view" width="100%">
	        		</a>
	            </div>
	            <div class="panel-heading">Tutoring</div>
	        </div>
        </div>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/app.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/app.js') }} async="true"></script>
@endsection