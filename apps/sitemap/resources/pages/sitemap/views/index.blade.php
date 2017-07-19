@extends('viender::layouts.app')

@section('content')
<div class="sitemap" style="padding-top: 5px;">
	<div class="row">
		<div class="col s3">
		</div>
		<div class="col s6">
            <div class="viender-sitemap row">
                <h1>Viender Sitemap</h1>
                <h2 class="col s3"><a href="{{ route('viender.sitemap.sitemap.recent') }}">Recent</a></h2>
                <h2 class="col s3"><a href="{{ route('viender.sitemap.sitemap.questions') }}">Questions</a></h2>
                <h2 class="col s3"><a href="{{ route('viender.sitemap.sitemap.topics') }}">Topics</a></h2>
                <h2 class="col s3"><a href="{{ route('viender.sitemap.sitemap.people') }}">People</a></h2>
            </div>
            <h1>Featured Topics</h1>
            <div class="featured-topics row" style="column-count: 3">
                @foreach($categories as $category)
                    <div style="column-width: 30%; margin-bottom: 20px; break-inside: avoid;">
                        <h2 style="margin-top: 0;">{{ $category->name }}</h2>
                        @foreach($category->topics as $topic)
                            <dd>
                                <a href="{{ route('web.viender.topic.pages.topic.show', $topic) }}"><span>{{ $topic->name }}</span></a>
                            </dd>
                        @endforeach
                    </div>
                @endforeach
            </div>
		</div>
		<div class="col s3">
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
