@extends('viender::layouts.app')

@section('content')
<div class="sitemap" style="padding-top: 5px;">
    <div class="row">
        <div class="col s3">
        </div>
        <div class="col s6">
            <div>
                <a href="{{ route('web.viender.sitemap.sitemap.index') }}" style="display: inline-block;">
                    <h1>
                        Viender Sitemap
                    </h1>
                </a>
                <span>-</span>
                <span>People</span>
            </div>
            {{ $users->links() }}
            <ul>
                @foreach($users as $user)
                    <li>
                        <a href="{{ route('web.viender.profile.pages.profile', $user->username) }}">
                            {{ $user->fullName() }}
                        </a>
                    </li>
                @endforeach
            </ul>
        </div>
        <div class="col s3">
        </div>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('/css/viender/sitemap/sitemap/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('/js/viender/sitemap/sitemap/app.js') }} async defer></script>
@endsection
