@extends('viender::layouts.app')

@section('content')
<div class="welcome-container-desktop">
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
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app.css') }}>
<style>
    #navbar-mobile {
        display: none;
    }

    .welcome {
        position: absolute;
        left: 0;
        right: 0;
        top: 45px;
        bottom: 0;
        width: 400px;
        height: 584px;
        border-radius: 5px;
        margin: auto;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
        background-color: #fff;
    }

    .welcome-content {
        padding: 20px;
        position: absolute;
        /*color: #fff;*/
        color: #333;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 0;
        right: 0;
        height: 50%;
    }

    .welcome-footer {
        position: absolute;
        bottom: 0;
        padding: 20px;
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
        color: #1da1f2;
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

    .welcome-container-desktop {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
        background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/img/welcome-background.jpg);
        /*background-repeat: no-repeat;*/
    }
</style>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app.js') }} async defer></script>
@endsection
