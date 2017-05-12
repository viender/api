<div id="navbar-mobile" class="navbar-fixed navbar-mobile">
    <nav class="navbar-mobile">
        <div class="nav-wrapper">
            <div class="row navbar-mobile-header">
                <div class="col s3">

                </div>
                <div class="col s6">
                    <div class="logo">
                       <h1><a href="/">Viender</a></h1>
                    </div>
                </div>
                <div class="col s3">
                    <search-or-ask-panel-trigger-open>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <span> Ask</span>
                    </search-or-ask-panel-trigger-open>
                </div>
            </div>
            <div class="row navbar-mobile-menus">
                @if (Auth::guest())
                    <div class="col s6"><a href="{{ url('/login') }}">Login</a></div>
                    <div class="col s6"><a href="{{ url('/register') }}">Register</a></div>
                @else
                    <div class="col s4">
                        <a class="navbar-mobile-menus-button {{ Route::currentRouteName() == 'web.viender.socialite.pages.read' ? 'active' : ''  }}" href={{ route('web.viender.socialite.pages.read') }}><i class="fa fa-newspaper-o" aria-hidden="true"></i></a>
                    </div>
                    <div class="col s4">
                        <a class="navbar-mobile-menus-button {{ Route::currentRouteName() == 'web.viender.socialite.pages.answer' ? 'active' : ''  }}" href={{ route('web.viender.socialite.pages.answer') }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                    </div>
                    <div class="col s4">
                        <a class="navbar-mobile-menus-button {{ Route::currentRouteName() == 'web.viender.profile.pages.profile' ? 'active' : ''  }}" href={{ route('web.viender.profile.pages.profile', \Auth::user()->username) }}><i class="fa fa-user" aria-hidden="true"></i></a>
                    </div>
                @endif
            </div>
        </div>
    </nav>
</div>

<search-or-ask-panel></search-or-ask-panel>
<create-question-overlay></create-question-overlay>
