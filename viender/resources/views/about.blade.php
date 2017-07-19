@extends('viender::layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <h1 class="center" style="font-size: 40px; margin: 32px 0;">About Viender</h1>
            <p>Viender adalah tempat untuk mendapatkan dan berbagi pengetahuan. Viender merupakan sebuah platform untuk bertanya dan mendapatkan masukan dan jawaban berkualitas dari berbagai pengguna yang memiliki pengetahuan yang unik.</p>
            <p>Terkadang kita tidak mempunyai kesempatan untuk mendapatkan akses ke pengetahuan yang tersimpan di kepala orang - orang yang tidak dapat kita jangkau. Viender hadir untuk memberikan kesempatan kepada kita untuk dapat terhubung dengan orang - orang yang memiliki pengetahuan dan pengalaman yang beragam tersebut. Bersama kita akan membuat semua orang dapat memiliki akses ke pengetahuan yang akan membuat dunia kita menjadi lebih baik.</p>
        </div>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/answer/app-mobile.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/answer/app-mobile.js') }} async defer></script>
@endsection
