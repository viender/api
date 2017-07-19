@extends('viender::layouts.app')

@section('content')
<div class="sitemap" style="padding: 10px;">
    <div class="row">
        <div>
            <a href="{{ route('web.viender.sitemap.sitemap.index') }}" style="display: inline-block;">
                <h1>
                    Viender Sitemap
                </h1>
            </a>
            <span>-</span>
            <span>Questions</span>
        </div>
        {{ $questions->links() }}
        <ul>
            @foreach($questions as $question)
                <li style="margin-bottom: 10px">
                    <a href="{{ route('web.viender.socialite.pages.questionShow', $question->slug) }}">
                        {{ $question->title }}
                    </a>
                </li>
            @endforeach
        </ul>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('/css/viender/sitemap/sitemap/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('/js/viender/sitemap/sitemap/app.js') }} async defer></script>
@endsection
