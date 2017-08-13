@extends('viender::layouts.app')

@section('content')
<div class="">
	<div class="row profile-header">
		<div class="col s3 profile-avatar left-column">
			<img src="{{ Storage::url($user->avatar_large_url) }}" alt="">
		</div>
	</div>

	<div class="row profile-nav">
		<div class="col s8 offset-s3">
			@include('viender.profile.layouts::profileNav', ['currentMenu' => $currentMenu])
		</div>
	</div>

	<div class="row">
		<div class="col s3 left-column">
			<div class="profile-content__userDetail">
				<span>{{ $user->fullName() }}</span>
			</div>
		</div>

		<div class="col s6">
			<div class="profile-content">
				@yield('profile-content')
			</div>
		</div>

		<div class="col s3">
		</div>
	</div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/profile/profile/app.css') }}>
@endsection

@section('scripts')
<script>
    window.$loadScript({
        d: document,
        tag: 'script',
        id: 'app-script',
        url: "{{ mix('js/viender/profile/profile/app.js') }}",
        onload: function() {
            window.$appScriptLoaded = true;
            window.$runApp();
        }
    });
</script>
@endsection
