@extends('viender::layouts.app')

@section('content')
<div class="" style="padding-top: 5px;">
	<div class="row">
		<div class="col s3">

		</div>
		<div class="col s6">
            <h5>Top stories for you</h5>
            <textarea></textarea>
            <feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.answers.index') }}' }"></feed-list>
            <answer-show-modal></answer-show-modal>
		</div>
		<div class="col s3">

		</div>
	</div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app.js') }} async defer></script>
<script>
$(document).ready(function() {
    console.log($('textarea'));
    tinymce.init({
      selector: 'textarea',
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code'
      ],
      toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      content_css: '//www.tinymce.com/css/codepen.min.css'
    });
});
</script>
@endsection
