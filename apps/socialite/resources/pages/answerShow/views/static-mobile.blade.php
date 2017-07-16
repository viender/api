@extends('viender::layouts.app')

@section('content')
<div class="mobile">
    <answer :answer="{{ json_encode($transformedAnswer) }}"></answer>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app-mobile.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app-mobile.js') }} async defer></script>
@endsection
