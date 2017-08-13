@extends('viender::layouts.app')

@section('content')
<div class="questionShow-container">

	<div class="row u-margin--none question question-static-preloader">
        <div class="card question-container">
            <a href="{{ route('web.viender.socialite.pages.questionShow', $question) }}"><h2 class="card-title">{{ $question->title }}</h2></a>
            <p class="answerCreateForm-questionDetail shrinked" onclick="document.getElementsByClassName('answerCreateForm-questionDetail')[0].style.whiteSpace = 'initial'">
                {{ $question->body }}
            </p>
            <div class="card-action">
                <a href="?auth=1" class="btn btn-default">Answer</a>
                <a href="?auth=1">Downvote</a>
                <a href="?auth=1">Comments</a>
            </div>
        </div>
    </div>

	<question url="{{ route('api.viender.socialite.questions.show', $question) }}"></question>
	<h5>
		@if($question->answers()->count())
			{{ $question->answers()->count() }} Answers:
		@else
			No Answer Yet
		@endif
	</h5>
	<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.questions.answers.index', $question) }}' }" :options="{ answers: {showQuestion: false}}"></feed-list>
	<answer-create-modal @answer-posted="hideActiveMoreMenu()"></answer-create-modal>
	<answer-show-modal></answer-show-modal>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/questionShow/app-mobile.css') }}>
@endsection

@section('scripts')
<script>
    window.$loadScript({
        d: document,
        tag: 'script',
        id: 'app-script',
        url: "{{ mix('js/viender/socialite/questionShow/app-mobile.js') }}",
        onload: function() {
            window.$appScriptLoaded = true;
            window.$runApp();
        }
    });
</script>
@endsection
