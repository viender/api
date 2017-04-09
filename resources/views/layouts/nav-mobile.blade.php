<div id="navbar-mobile" class="navbar-fixed navbar-mobile">
    <nav class="navbar-mobile">
        <div class="nav-wrapper">
            <div class="row navbar-mobile-header">
                <div class="col s3">
                    {{-- <i class="material-icons menu-button">menu</i> --}}
                </div>
                <div class="col s6">
                    <div class="logo">
                       <h1><a href="/">Viender</a></h1>
                    </div>
                </div>
                <div class="col s3">
                    <search-or-ask-panel-trigger-open>
                        <i class="material-icons dp48 search-button">zoom_in</i>
                    </search-or-ask-panel-trigger-open>
                </div>
            </div>
            <div class="row navbar-mobile-menus">
                @if (Auth::guest())
                    <div class="col s6"><a href="{{ url('/login') }}">Login</a></div>
                    <div class="col s6"><a href="{{ url('/register') }}">Register</a></div>
                @else
                    <div class="col s4"><a href={{ route('web.viender.socialite.pages.read') }}>Feed</a></div>
                    <div class="col s4"><a href={{ route('web.viender.socialite.pages.answer') }}>Questions</a></div>
                    <div class="col s4"><a href={{ route('web.viender.profile.pages.profile', \Auth::user()->username) }}>You</a></div>
                @endif
            </div>
        </div>
    </nav>
</div>

<search-or-ask-panel></search-or-ask-panel>
<create-question-overlay></create-question-overlay>
