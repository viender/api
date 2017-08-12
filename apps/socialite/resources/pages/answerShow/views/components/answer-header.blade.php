@section('more-meta')
    <meta property="og:type"   content="article"/>
    <meta property="og:url"    content="{{ route('web.viender.socialite.pages.answerShow', [$answer->question->slug, $answer->slug]) }}"/>
    <meta property="og:title"  content="{{ $answer->question->title }}"/>
    <meta property="og:image"  content="{{ $answer->image }}"/>
@endsection
