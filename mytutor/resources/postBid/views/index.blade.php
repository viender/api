@extends('layouts.app')

@section('head')

@endsection

@section('content')
<div id="viender_mytutor_postTutoring" class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
			<bid-create-form action="{{ route('api.viender.mytutor.tutorings.bids.store', $tutoring->id) }}" tutoring-url="{{ route('web.viender.mytutor.tutorings.show', $tutoring->id) }}" csrf-token="{{ csrf_token() }}"></bid-create-form>
        </div> 
    </div>
</div>
@endsection

@section('scripts')
<script src={{ mix('js/viender/mytutor/postBid/app.js') }}></script>
@endsection