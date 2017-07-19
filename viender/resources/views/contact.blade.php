@extends('viender::layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <h1 class="center" style="font-size: 40px; margin: 32px 0;">Contact Us</h1>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/answer/app-mobile.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/answer/app-mobile.js') }} async defer></script>
@endsection
