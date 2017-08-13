@extends('viender::layouts.app')

@section('content')
<div class="" style="padding-top: 5px;">
	<div class="row">
		<div class="col s3">
			<div style="margin-left: 130px">
				<strong>Feeds</strong>
				<div class="collection">
					<a href="#" class="collection-item">Top stories</a>
					<a href="#" class="collection-item">Cooking</a>
					<a href="#" class="collection-item">Golf</a>
					<a href="#" class="collection-item">Business</a>
					<a href="#" class="collection-item">Technol</a>
				</div>
			</div>
		</div>
		<div class="col s6">
			<h5>Top stories for you</h5>
			<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.answers.index') }}' }"></feed-list>
			<answer-show-modal></answer-show-modal>
		</div>
		<div class="col s3">
			dsfs
		</div>
	</div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app.css') }}>
@endsection

@section('scripts')
<script>
    window.$loadScript({
        d: document,
        tag: 'script',
        id: 'app-script',
        url: "{{ mix('js/viender/notification/notification/app.js') }}",
        onload: function() {
            window.$appScriptLoaded = true;
            window.$runApp();
        }
    });
</script>
@endsection
