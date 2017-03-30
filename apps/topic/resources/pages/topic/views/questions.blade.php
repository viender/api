@extends('viender.topic.layouts::topic', ['currentMenu' => 1])

@section('topic-content')
	<h5>Questions</h5>
	<question-list question-url="{{ route('api.viender.socialite.topics.questions.index', $topic) }}"></question-list>
@endsection
