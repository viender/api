@extends('viender::layouts.app')

@section('content')
<div class="" style="padding-top: 5px;">
	<div class="row">
		<div class="col s3">
			<div style="margin-left: 130px">
                <h5>Add New Campaigns</h5>

                <form action="{{ route('web.viender.campaign.store') }}" method="POST">
                    {{ csrf_field() }}
                    <input type="text" name="name" placeholder="name">
                    <input type="text" name="source" placeholder="source">
                    <input type="submit">
                </form>
			</div>
		</div>
		<div class="col s6">
            <h5>Campaigns</h5>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Source</th>
                        <th>Hits</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($campaigns as $campaign)
                        <tr>
                            <td>{{ $campaign->id }}</td>
                            <td>{{ $campaign->name }}</td>
                            <td>{{ $campaign->source }}</td>
                            <td>{{ $campaign->hit_count }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
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
@endsection
