@extends('viender::layouts.app')

@section('content')
<div class="sitemap" style="padding: 10px;">
    <div class="row">
            <div class="viender-sitemap row">
                <h1>Viender Sitemap</h1>
                <h2 class="col s3"><a href="#">Recent</a></h2>
                <h2 class="col s3"><a href="#">Questions</a></h2>
                <h2 class="col s3"><a href="#">Topics</a></h2>
                <h2 class="col s3"><a href="#">People</a></h2>
            </div>
            <div class="featured-topics row">
                <h1>Featured Topics</h1>
                @foreach($categories as $category)
                    <div>
                        <h2>{{ $category->name }}</h2>
                        @foreach($category->topics as $topic)
                            <dd>
                                <a href="{{ route('web.viender.topic.pages.topic.show', $topic) }}"><span>{{ $topic->name }}</span></a>
                            </dd>
                        @endforeach
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/sitemap/sitemap/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/sitemap/sitemap/app.js') }} async defer></script>
@endsection
