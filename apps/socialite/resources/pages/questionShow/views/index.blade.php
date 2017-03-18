@extends('viender::layouts.app')

@section('content')
hello
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/questionShow/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/questionShow/app.js') }} async="1"></script>
@endsection