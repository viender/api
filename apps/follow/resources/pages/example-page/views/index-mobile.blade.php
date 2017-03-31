@extends('viender::layouts.app')

@section('content')
<div class="mobile">
	<div class="row">
		<div class="col s12">
			<h5>Top stories for you</h5>
		</div>
	</div>
	
	<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.answers.index') }}' }"></feed-list>
	<answer-show-modal></answer-show-modal>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app-mobile.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app-mobile.js') }} async defer></script>
@endsection
