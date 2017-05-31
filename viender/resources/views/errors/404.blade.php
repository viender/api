@extends('viender::layouts.app')

@section('content')
<div class="" style="padding: 10px;">
    @if(\Agent::isDesktop())
        <div class="row">
            <div class="col s3">

            </div>
            <div class="col s6">
                <h5>Page Not Found</h5>
                <p>We searched everywhere but couldn't find the page you were looking for.</p>
                <a href="{{ url()->previous() }}" style="padding-right: 20px;">Go Back</a>
                <a href="{{ url('/') }}">Viender Home</a>
            </div>
            <div class="col s3">
            </div>
        </div>
    @else
        <h5>Page Not Found</h5>
        <p>We searched everywhere but couldn't find the page you were looking for.</p>
        <a href="{{ url()->previous() }}" style="padding-right: 20px;">Go Back</a>
        <a href="{{ url('/') }}">Viender Home</a>
    @endif
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app.js') }} async defer></script>
@endsection
