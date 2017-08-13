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
            <span>Topics</span>
        </div>
        {{ $topics->links() }}
        <ul>
            @foreach($topics as $topic)
                <li style="margin-bottom: 10px">
                    <a href="{{ route('web.viender.topic.pages.topic.show', $topic) }}">
                        {{ title_case($topic->name) }}
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
<script>
    window.$loadScript({
        d: document,
        tag: 'script',
        id: 'app-script',
        url: "{{ mix('js/viender/sitemap/sitemap/app.js') }}",
        onload: function() {
            window.$appScriptLoaded = true;
            window.$runApp();
        }
    });
</script>
@endsection
