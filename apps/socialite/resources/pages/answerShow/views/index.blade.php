@extends('viender::layouts.app')

@section('content')
<div class="" style="padding-top: 5px;">
    <div class="row">
        <div class="col s3">

        </div>
        <div class="col s6">
            <h5><a href="{{ route('web.viender.socialite.pages.questionShow', $answer->question) }}">{{ $answer->question->title }}</a></h5>
            <p>{!! $answer->body !!}</p>
            <comment-list comments-url="{{ route('api.viender.socialite.answers.comments.index', $answer) }}"></comment-list>
        </div>
        <div class="col s3">

        </div>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/answerShow/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/answerShow/app.js') }} async defer></script>
@endsection
