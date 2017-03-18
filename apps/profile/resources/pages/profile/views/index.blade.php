@extends('viender::layouts.app')

@section('content')
<div class="" style="padding-top: 5px;">
	<div class="row">
		<div class="col s3">

		</div>
		<div class="col s6">
			{{ $user->fullName() }}
		</div>
		<div class="col s3">
			
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