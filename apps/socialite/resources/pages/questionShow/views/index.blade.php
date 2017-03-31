@extends('viender::layouts.app')

@section('content')
<div class="" style="padding-top: 5px;">
	<div class="row">
		<div class="col s3">

		</div>
		<div class="col s6">
			<question url="{{ route('api.viender.socialite.questions.show', $question) }}"></question>
			@if($question->answers()->count())
				<h5>All Answers:</h5>
			@else
				<h5>No Answer Yet</h5>
			@endif
        	<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.questions.answers.index', $question) }}' }" :options="{ answers: {showQuestion: false}}"></feed-list>
        	<answer-create-modal></answer-create-modal>
			<answer-show-modal></answer-show-modal>
		</div>
		<div class="col s3">

		</div>
	</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/questionShow/app.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/socialite/questionShow/app.js') }} async="1"></script>
@endsection
