@extends('viender::layouts.app')

@section('content')
<div class="" style="padding-top: 5px;">
	<div class="row">
		<div class="col s3">

		</div>
		<div class="col s6">
			<div class="row u-margin--none question question-static-preloader">
				<div class="col s12">
					<div class="card u-margin--none u-box-shadow--none">
						<div class="card-content">
							<span class="card-title">
								<h4><a href="{{ route('web.viender.socialite.pages.questionShow', $question) }}">{{ $question->title }}</a></h4>
							</span>
						</div>
						<div class="answerCreateForm-questionDetail shrinked" onclick="document.getElementsByClassName('answerCreateForm-questionDetail')[0].style.whiteSpace = 'initial'">
			            	{{ $question->body }}
			            </div>
			            <div class="card-action">
			            	<button class="btn btn-default">Answer</button>
			            	<a>Downvote</a>
			            	<a>Comments <span>(1)</span></a>
			            </div>
			        </div>
			    </div>
			</div>
			<question url="{{ route('api.viender.socialite.questions.show', $question) }}"></question>
			@if($question->answers()->count())
				<h5>{{ $question->answers()->count() }} Answers:</h5>
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

@section('scripts')
<script src={{ mix('js/viender/socialite/questionShow/app.js') }} async defer></script>
@endsection
