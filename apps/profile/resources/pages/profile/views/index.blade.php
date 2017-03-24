@extends('viender::layouts.app')

@section('content')
<div class="">
	<div class="row profile-header">
		<div class="col s8 offset-s2 profile-avatar">
			<img src="{{ $user->avatar_url }}" alt="">
		</div>
	</div>

	<div class="row profile-nav">
		<div class="col s8 offset-s2">
			<div class="row">
				<div class="col s9 offset-s3">
					<ul class="profileNavigation-list">
						<li class="profileNavigation-item">
							<a href="#Answers">
								<span class="profileNavigation-label">Answers</span>
								<span class="profileNavigation-value">{{ $user->answers->count() }}</span>
							</a>
						</li>
						<li class="profileNavigation-item">
							<a href="#Questions">
								<span class="profileNavigation-label">Questions</span>
								<span class="profileNavigation-value">{{ $user->questions->count() }}</span>
							</a>
						</li>
						<li class="profileNavigation-item">
							<a href="#Questions">
								<span class="profileNavigation-label">Following</span>
								<span class="profileNavigation-value">{{ $user->following->count() }}</span>
							</a>
						</li>
						<li class="profileNavigation-item">
							<a href="#Questions">
								<span class="profileNavigation-label">Followers</span>
								<span class="profileNavigation-value">{{ $user->followers->count() }}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col s2">
		</div>
		<div class="col s8">
			<div class="row">
				<div class="col s3">
					<div class="profile-content__name">
						{{ $user->fullName() }}
					</div>
				</div>
				<div class="col s9">
					
				</div>
			</div>
		</div>
		<div class="col s2">
		</div>
	</div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/profile/profile/app.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/profile/profile/app.js') }} async="1"></script>
@endsection
