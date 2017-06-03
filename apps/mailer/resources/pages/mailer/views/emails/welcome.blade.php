@component('mail::message')
# Welcome to Viender

Hello! To complete your registration, please click the link bellow.

@component('mail::button', ['url' => url('/')])
Confirm Email Address
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
