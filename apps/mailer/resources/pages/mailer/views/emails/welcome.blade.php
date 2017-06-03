@extends('viender::layouts.emails.layout')

@section('css')
    .confirm-button {
        color: #ffffff;
        text-decoration: none!important;
        min-width: 234px;
        border: 13px solid #53b987;
        border-radius: 4px;
        background-color: #53b987;
        font-size: 20px;
        display: inline-block;
        text-align: center;
        vertical-align: top;
        font-weight: 900;
    }
@endsection

@section('header')
    <span style="color: #666; font-size: 12px;">Welcome to Viender</span>
@endsection

@section('body')
    <table class="content" height="100%" width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td class="content-image" style="height: 200px;">
                <img class="image" src="{{ url('img/emails/background.png') }}" alt="" />
                <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; text-align: center;">
                    <img width="92px" src="{{ url('img/icons/launcher-icon-2x.png') }}" alt="" />
                    <h1 style="color: #fff;">Welcome to Viender</h1>
                </div>
            </td>
        </tr>
        <tr>
            <td style="vertical-align: top; padding-top: 20px;">
                Hello! To complete your registration, please click the link below.
                <div style="text-align: center; padding-top: 32px;">
                    <a href="" class="confirm-button">Confirm Email Address</a>
                </div>
            </td>
        </tr>
    </table>
@endsection
