@extends('layouts.app')

@section('content')
<example></example>
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

@section('scripts')
<script src={{ mix('js/app.js') }}></script>
@endsection