@extends('viender::layouts.app')

@section('content')
<div class="topicShow">
	<div class="topicShow-header">
		<div class="topicShow-header-thumbnail">
			<img src="{{ $topic->thumbnail }}" alt="">
		</div>
		<div class="topicShow-header-detail">
			<h4>{{ $topic->name }}</h4>
		</div>
	</div>
	<div class="topicShow-description">
		<h5>About</h5>
		<p>{{ $topic->description }}</p>
	</div>
	@include('viender.topic.layouts::topicNav-mobile', ['currentMenu' => $currentMenu, 'obj' => $topic])
	<div class="topicShow-content">
		@yield('topicShow-content')
	</div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/topic/topic/app-mobile.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/topic/topic/app-mobile.js') }} async="1"></script>
@endsection
