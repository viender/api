@extends('viender::layouts.app')

@section('content')
<div class="welcome">
    <div class="welcome-content">
        <span class="main-text">Welcome to Viender</span>
        <span class="sub-text">Share your ideas and experiences.</span>
    </div>
    <div class="welcome-footer">
        <a class="btn btn-default signup" href="/register">Sign up</a>
        <a class="btn btn-default login" href="/login">Login</a>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app-mobile.css') }}>
<style>
    #navbar-mobile {
        display: none;
    }

    .welcome {
        position: absolute;
        left: 0;
        top: 0;
        min-height: 100%;
        padding: 11px;
        background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/img/welcome-background.jpg);
    }

    .welcome-content {
        margin-top: 50%;
        color: #fff;
    }

    .welcome-footer {
        position: absolute;
        bottom: 0;
        padding: 20px 10px;
        left: 0;
        right: 0;
    }

    .welcome-footer a {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        text-transform: none;
        font-weight: 600;
    }

    .welcome-footer .login {
        background-color: transparent;
        border: solid 1px;
    }

    .main-text {
        display: block;
        font-size: 4rem;
        line-height: 0100%;
        font-weight: 500;
    }

    .sub-text {
        display: block;
        font-size: 2rem;
        line-height: 100%;
    }
</style>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app-mobile.js') }} async defer></script>
@endsection
