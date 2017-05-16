@extends('viender::layouts.app')

@section('content')
<div class="sitemap" style="padding-top: 5px;">
	<div class="row">
		<div class="col s3">
		</div>
		<div class="col s6">
            <div class="viender-sitemap row">
                <h1>Viender Sitemap</h1>
                <h2 class="col s3"><a href="#">Recent</a></h2>
                <h2 class="col s3"><a href="#">Questions</a></h2>
                <h2 class="col s3"><a href="#">Topics</a></h2>
                <h2 class="col s3"><a href="#">People</a></h2>
            </div>
            <div class="featured-topics row">
                <h1>Featured Topics</h1>
                @foreach($roots as $root)
                    <dl class="col s4">
                        <dt><h2>{{ $root->name }}</h2></dt>
                        @foreach(Viender\Topic\Models\Topic::where('parent_id', $root->id)->get() as $topic)
                            <dd>
                                <a href="{{ route('web.viender.topic.pages.topic.show', $topic) }}"><span>{{ $topic->name }}</span></a>
                            </dd>
                        @endforeach
                    </dl>
                @endforeach
            </div>
		</div>
		<div class="col s3">
		</div>
	</div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/sitemap/recent/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/sitemap/recent/app.js') }} async defer></script>
@endsection
