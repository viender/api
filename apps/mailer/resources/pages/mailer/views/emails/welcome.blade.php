@component('mail::message')
# Welcome to Viender

Hello! To complete your registration, please click the link bellow.

@component('mail::button', ['url' => route('web.viender.user.confirm', [$user, sha1($user->username . '-' . $user->created_at)])])
Confirm Email Address
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
