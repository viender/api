@extends('viender::layouts.app')

@section('content')
<div class="" style="padding: 10px;">
    <div>
        <h5>Add New Campaigns</h5>

        <form action="{{ route('web.viender.campaign.store') }}" method="POST">
            {{ csrf_field() }}
            <input type="text" name="name" placeholder="name" required="required">
            <div class="input-field">
                <select name="source" style="display: initial; width: 100%; margin-bottom: 10px;" required="required">
                    <option value="" disabled selected>Source</option>
                    <option value="Email">Email</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Line">Line</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Telegram">Telegram</option>
                    <option value="Google Form">Google Form</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div style="display: block; text-align: right;">
                <input class="btn btn-default" type="submit">
            </div>
        </form>
    </div>
    <h5>Campaigns</h5>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Source</th>
                <th>Hits</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($campaigns as $campaign)
                <tr>
                    <td>{{ $campaign->id }}</td>
                    <td>{{ $campaign->name }}</td>
                    <td>{{ $campaign->source }}</td>
                    <td>{{ $campaign->campaignHits()->count() }}</td>
                    <td>
                        <div>
                            @if(!$campaign->finish)
                                <form style="display: inline-block;" action="{{ route('web.viender.campaign.reset', $campaign) }}" method="POST">
                                    {{ csrf_field() }}
                                    <input type="submit" value="Reset" onclick="return confirm('Are you sure to reset this Campaign?');">
                                </form>
                                <form style="display: inline-block;" action="{{ route('web.viender.campaign.finish', $campaign) }}" method="POST">
                                    {{ csrf_field() }}
                                    <input type="submit" value="Finish">
                                </form>
                            @else
                                <form style="display: inline-block;" action="{{ route('web.viender.campaign.destroy', $campaign) }}" method="POST">
                                    {{ csrf_field() }}
                                    {{ method_field('DELETE') }}
                                    <input type="submit" value="Delete" onclick="return confirm('Are you sure to delete this Campaign?');">
                                </form>
                                <form style="display: inline-block;" action="{{ route('web.viender.campaign.unfinish', $campaign) }}" method="POST">
                                    {{ csrf_field() }}
                                    <input type="submit" value="Start Again">
                                </form>
                            @endif
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app.css') }}>
@endsection

@section('scripts')
<script>
    window.$loadScript({
        d: document,
        tag: 'script',
        id: 'app-script',
        url: "{{ mix('js/viender/socialite/read/app.js') }}",
        onload: function() {
            window.$appScriptLoaded = true;
            window.$runApp();
        }
    });
</script>
@endsection
