@extends('viender::layouts.app')

@section('content')
<div class="topic">
	<div class="row topic-header">
		<div class="col s8 offset-s2">
			<img src="{{ $topic->thumbnail }}" alt="">
			<h4 class="topic-header__name">{{ $topic->name }}</h4>
		</div>
	</div>

	<div class="row topic-nav">
		<div class="col s8 offset-s2">
			@include('viender.topic.layouts::topicNav', ['currentMenu' => $currentMenu, 'obj' => $topic])
		</div>
	</div>

	<div class="row">
		<div class="col s2 left-column">

		</div>

		<div class="col s6">
			<div class="topic-content">
				@yield('topic-content')
			</div>
		</div>

		<div class="col s4">
			<h5>About</h5>
			<div class="topic-about">
				<p>{{ $topic->description }}</p>
			</div>
		</div>
	</div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/topic/topic/app.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/topic/topic/app.js') }} async="1"></script>
@endsection
