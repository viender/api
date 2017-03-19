<div class="navbar-fixed navbar-mobile" style="margin-top: -1px;">
    <nav class="navbar-mobile">
        <div class="nav-wrapper">
            <div class="row navbar-mobile-header">
                <div class="col s12">
                    <div class="logo">
                        <a href="/">Viender</a>
                    </div>
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