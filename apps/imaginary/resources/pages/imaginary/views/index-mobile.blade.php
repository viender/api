@extends('viender::layouts.app')

@section('content')
<div class="mobile">
    <form action="/imaginary/test" method="POST" enctype="multipart/form-data">
        {{ csrf_field() }}
        <input name="image" type="file">
        <input type="submit">
    </form>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app-mobile.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app-mobile.js') }} async defer></script>
@endsection
