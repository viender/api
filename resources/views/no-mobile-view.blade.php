@extends('viender::layouts.app')

@section('content')
	<div class="container">
		<p>This page is currently not supported from mobile browser, please visit this page from your desktop browser.</p>
	</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app-mobile.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/socialite/read/app-mobile.js') }} async="1"></script>
@endsection
