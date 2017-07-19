@extends('viender::layouts.app')

@section('content')
<div class="sitemap" style="padding-top: 5px;">
	<div class="row">
		<div class="col s3">
		</div>
		<div class="col s6">
		</div>
		<div class="col s3">
		</div>
	</div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/sitemap/recent/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/sitemap/recent/app.js') }} async defer></script>
@endsection
