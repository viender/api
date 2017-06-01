@extends('viender::layouts.app')

@section('content')
<div class="welcome-container-desktop">
    <div class="welcome">
        <div class="welcome-content">
            <span class="main-text">Welcome to Viender</span>
            <span class="sub-text">A place to gain knowlegde and share your ideas and experiences.</span>
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
                <p>By signing up, you agree to the <a href="{{ route('web.viender.page.about.privacy') }}">Privacy Policy</a> and including Cookie Use.</p>
            </div>
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
        padding: 36px;
        position: absolute;
        /*color: #fff;*/
        color: #333;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 0;
        right: 0;
        height: 90%;
    }

    .welcome-footer {
        position: absolute;
        bottom: 0;
        padding: 20px;
        left: 0;
        right: 0;
    }

    .welcome-footer .login-action {
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

    .welcome-container-desktop {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
        background: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) );
        /*background-repeat: no-repeat;*/
        background-color: #1da1f2;
    }
</style>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app.js') }} async defer></script>
@endsection
