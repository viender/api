@extends('viender::layouts.app')

@section('content')
<div id="viender_mytutor_postTutoring" class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
			<tutoring-create-form action="{{ route('api.viender.mytutor.tutorings.store') }}"></tutoring-create-form>
        </div> 
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{  mix('css/viender/mytutor/postTutoring/app.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/mytutor/postTutoring/app.js') }} async="1"></script>
@endsection