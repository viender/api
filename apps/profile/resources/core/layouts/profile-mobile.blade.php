@extends('viender::layouts.app')

@section('content')
<div class="">
	<div class="row profile-header">
		<div class="col s12 profile-avatar">
			<img src="{{ $user->avatar_url }}" alt="">
		</div>
	</div>

	<div class="row profile-userDetail">
		<div class="col s12">
			<span class="profile-userDetail__name">{{ $user->fullName() }}</span>
			
			@if($followed = \Auth::user()->followings()->where([
	            'follower_id'   => \Auth::user()->id,
	            'followee_id'   => $user->id,
	            'followee_type' => \App\User::class,
	        ])->exists() && \Auth::user() ? \Auth::user()->id != $user->id : false)
	        	<div class="followUserButton" v-if="notMounted">
	        		<button class="btn followed">Unfollow</button>
	        	</div>
	        @elseif(\Auth::user() ? \Auth::user()->id != $user->id : false)
	        	<div class="followUserButton" v-if="notMounted">
	        		<button class="btn">Follow</button>
	        	</div>
	        @endif

			@if(\Auth::user() ? \Auth::user()->id != $user->id : false)
				<follow-user-button
					followee_id="{{ $user->id }}"
					url="{{ route('api.viender.follow.users.followings.store', \Auth::user()) }}"
					followed="{{ $followed }}"
					@mounted="hideBeforeMountedPreloaders()">
				</follow-user-button>
			@endif
		</div>
	</div>

	<div class="row">
		<div class="col s12">
			@include('viender.profile.layouts::profileNav-mobile', ['currentMenu' => $currentMenu])
			<div class="profile-content">
				@yield('profile-content')
			</div>
		</div>
	</div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/profile/profile/app-mobile.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/profile/profile/app-mobile.js') }} async="1"></script>
@endsection
