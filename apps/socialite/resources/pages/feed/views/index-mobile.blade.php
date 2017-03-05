@extends('layouts.app')

@section('content')
<div class="mobile">
	<div class="row">
		<div class="col s12">
			<h5>Top stories for you</h5>
		</div>
	</div>
	
	<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.answers.index') }}' }"></feed-list>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/feed/app-mobile.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/socialite/feed/app-mobile.js') }} async="1"></script>
@endsection