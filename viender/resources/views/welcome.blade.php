@extends('viender::layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            Welcome
        </div>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/app.js') }}></script>
@endsection
