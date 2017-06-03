<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" style="background-color: #eee;color: #434245;font-size: 15px;line-height: 24px;font-family: Arial,sans-serif!important;">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
    <style>
        html {
            background-color: #eee;
            color: #434245;
            font-family:Arial,sans-serif!important;
            font-size:15px;
            line-height:24px;
        }

        .header {
            color: #333;
        }

        .body .content-cell {
            vertical-align: top;
        }

        .body .inner-body {
            background: #fff;
            padding: 20px;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
            min-height: 500px;
            vertical-align: top;
        }

        .body .image {
            position: absolute;
            height: 220px;
            width: calc(100% + 40px);
            top: -20px;
            left: -20px;
            right: -20px;
        }

        .content-image {
            position: relative;
            padding: 0;
        }

        @media  only screen and (max-width: 600px) {
            .inner-body {
                width: 100% !important;
            }

            .footer {
                width: 100% !important;
            }

            .body .inner-body {
                padding: 0;
            }

            .body .image {
                top: 0;
                right: 0;
                left: 0;
                width: 100%;
            }

            .body .content-cell {
                padding: 10px;
            }
        }

        @media  only screen and (max-width: 500px) {
            .button {
                width: 100% !important;
            }

            .body .inner-body {
                padding: 0;
            }

            .body .image {
                top: 0;
                right: 0;
                left: 0;
                width: 100%;
            }

            .body .content-cell {
                padding: 10px;
            }
        }

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
    </style>

    <table class="wrapper" width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center">
                <table class="content" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="header" width="100%" cellpadding="0" cellspacing="0" style="color: #333;">
                            <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0">
                                <!-- Body content -->
                                <tr>
                                    <td class="content-cell">
                                            <span style="color: #666; font-size: 12px;">Welcome to Viender</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Email Body -->
                    <tr>
                        <td class="body" width="100%" cellpadding="0" cellspacing="0">
                            <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" style="background: #fff;padding: 20px;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);min-height: 500px;vertical-align: top;">
                                <!-- Body content -->
                                <tr>
                                    <td class="content-cell" style="height: 100%;vertical-align: top;">
                                            <table class="content" height="100%" width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td class="content-image" style="height: 200px;position: relative;padding: 0;">
                <img class="image" src="{{ url('img/emails/background.png') }}" alt="" style="position: absolute;height: 220px;width: calc(100% + 40px);top: -20px;left: -20px;right: -20px;">
                <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; text-align: center;">
                    <img width="92px" src="{{ url('img/icons/launcher-icon-2x.png') }}" alt="">
                    <h1 style="color: #fff;">Welcome to Viender</h1>
                </div>
            </td>
        </tr>
        <tr>
            <td style="vertical-align: top; padding-top: 20px;">
                Hello! To complete your registration, please click the link below.
                <div style="text-align: center; padding-top: 32px;">
                    <a href="{{ url('/') }}" class="confirm-button" style="color: #ffffff;min-width: 234px;border: 13px solid #53b987;border-radius: 4px;background-color: #53b987;font-size: 20px;display: inline-block;text-align: center;vertical-align: top;font-weight: 900;text-decoration: none!important;">Confirm Email Address</a>
                </div>
            </td>
        </tr>
    </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
                                <table>
                    <tr>
                        <td style="font-family:Arial,sans-serif!important;font-size:15px;line-height:24px;vertical-align:top;padding:0 30px 40px;border-top:1px solid #e1e1e4;color:#a0a0a2;text-align:center;width:100%">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" align="center" style="font-family:Arial,sans-serif!important;border-collapse:collapse;width:100%;margin-top:20px;color:#989ea6">
                                <tbody>
                                    <tr>
                                        <td style="font-family:Arial,sans-serif!important;font-size:15px;line-height:24px;vertical-align:top;color:#999999;text-align:center;padding-top:20px">&nbsp;</td>
                                        <td style="font-family:Arial,sans-serif!important;font-size:15px;line-height:24px;vertical-align:top;color:#999999;text-align:center;padding-top:20px">
                                            <span style="color:#999999;font-size:15px;text-align:center;display:block">

                                                    Made by <a href="{{ url('/') }}" style="color:#565759;text-decoration:none;font-size:15px;text-align:center" target="_blank">Viender Technologies</a>
                                                    <br>
                                                    Mampang Prapatan XVI No.24, 2th Floor&nbsp;
                                                    &nbsp;Jakarta,&nbsp;Indonesia&nbsp;12760
                                                                                </span>
                                        </td>
                                        <td style="font-family:Arial,sans-serif!important;font-size:15px;line-height:24px;vertical-align:top;color:#999999;text-align:center;padding-top:20px">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="font-family:Arial,sans-serif!important;font-size:15px;line-height:24px;vertical-align:top;color:#999999;text-align:center;padding-top:20px">&nbsp;</td>
                                        <td style="font-family:Arial,sans-serif!important;font-size:15px;line-height:24px;vertical-align:top;color:#999999;text-align:center;padding-top:20px">
                                            <span style="color:#999999;font-size:15px;text-align:center">
                                                        <a href="{{ url('/') }}" style="color:#565759;text-decoration:none;font-size:15px;text-align:center" target="_blank">
                                                            Our Blog                                    </a>
                                                        <span style="color:#d8d8d8;font-size:15px;text-align:center">&nbsp;•&nbsp;</span>
                                            <a href="{{ url('/') }}" style="color:#565759;text-decoration:none;font-size:15px;text-align:center" target="_blank">
                                                            Email Preferences                                   </a>
                                            <span style="color:#d8d8d8;font-size:15px;text-align:center">&nbsp;•&nbsp;</span>
                                            <a href="{{ url('about/privacy') }}" style="color:#565759;text-decoration:none;font-size:15px;text-align:center" target="_blank">
                                                            Policies                                    </a>
                                            </span>
                                        </td>
                                        <td style="font-family:Arial,sans-serif!important;font-size:15px;line-height:24px;vertical-align:top;color:#999999;text-align:center;padding-top:20px">&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>

{{-- @extends('viender::layouts.emails.layout')

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
                    <a href="{{ url('/') }}" class="confirm-button">Confirm Email Address</a>
                </div>
            </td>
        </tr>
    </table>
@endsection
 --}}
