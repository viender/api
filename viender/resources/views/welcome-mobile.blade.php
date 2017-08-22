@extends('viender::layouts.app')

@section('content')
<div class="welcome">
    <div class="welcome-content">
        <span class="main-text">Welcome to Viender</span>
        <span class="sub-text">A place to gain knowledge and share your ideas and experiences.</span>
    </div>
    <div class="welcome-footer">
        <a class="login-action btn google waves-effect waves-light" href="{{ route('web.viender.social.login.google') }}">
            <i class="login-action-icon fa fa-google-plus-square fa-3" aria-hidden="true"></i>
            <span class="login-action-text facebook">Continue with Google</span>
        </a>
        <a class="login-action btn facebook waves-effect waves-light" href="{{ route('web.viender.social.login.facebook') }}">
            <i class="login-action-icon fa fa-facebook-official fa-3" aria-hidden="true"></i>
            <span class="login-action-text facebook">Continue with Facebook</span>
        </a>
        <div class="login-action-email">
            <a class="login-action-email-login" href="login">Login</a>
            <a class="login-action-email-register" href="register">Sign Up With Email</a>
        </div>
        <div class="agreement">
            <p>By signing up, you agree to the Privacy Policy and including Cookie Use.</p>
        </div>
        <ul class="link-list">
            <li class="link-list-item">
                <a href="{{ url('/about') }}">About</a>
            </li>
            <li class="link-list-item">
                <a href="{{ url('/sitemap') }}">Sitemap</a>
            </li>
            <li class="link-list-item">
                <a href="{{ route('web.viender.page.about.privacy') }}">Privacy</a>
            </li>
            <li class="link-list-item">
                <a href="{{ url('/contact') }}">Contact</a>
            </li>
        </ul>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app-mobile.css') }}>
<style>
    #navbar-mobile {
        display: none;
    }

    .agreement {
        line-height: 16px;
        font-size: 12px;
        color: #657786;
        padding: 0 20px;
    }

    .welcome {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        min-height: 100%;
        padding: 11px;
        padding-top: 80px;
        background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.06));
    }

    .welcome-content {
        color: #333;
        margin: auto;
        height: 50%;
        padding: 0 15px;
        max-width: 550px;
    }

    .link-list-item a {
        color: rgba(175,175,175,0.95);
        font-size: 13px;
    }

    .welcome-footer {
        padding: 20px 10px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .welcome-footer .login-action {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        text-transform: none;
    }

    .welcome-footer .login {
        background-color: transparent;
        border: solid 1px;
    }

    .main-text {
        display: block;
        font-size: 4rem;
        line-height: 0100%;
        font-weight: 300;
    }

    .sub-text {
        display: block;
        font-size: 20px;
        line-height: 100%;
        font-weight: 200;
    }

    .btn.facebook {
        background-color: #507cc0;
    }

    .btn.google {
        background-color: #df4930;
    }

    .btn.login-action {
        margin: 20px auto;
        height: 51px;
        line-height: 51px;
        position: relative;
        text-align: left;
        width: 90%;
        max-width: 320px;
        padding: 0px 13px;
        border-radius: 3px
    }

    .login-action-icon {
        position: absolute;
        font-size: 32px !important;
    }

    .login-action-text {
        padding-left: 50px;
        padding-left: 42px;
        font-size: 15px !important;
    }

    .login-action-email {
        text-align: center;
    }

    .login-action-email-login {
        padding-right: 10px;
    }

    .login-action-email-register {
        padding-left: 10px;
    }

    .link-list {
        padding: 0;
        margin: 0;
        text-align: center;
    }

    .link-list-item {
        list-style: none;
        display: inline-block;
        margin-right: 10px;
    }
</style>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app-mobile.js') }} async defer></script>
@endsection
