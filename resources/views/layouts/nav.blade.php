<div class="navbar-fixed">
	<nav class="navbar-desktop">
		<div class="nav-wrapper">
			<a class="logo left" href="{{ url('/') }}">
			{{ config('app.name', 'Laravel') }}
			</a>
			<ul class="left">
				<li>
					<form class="search-form">
						<div>
							<input type="text">
						</div>
					</form>
				</li>
			</ul>
			
			<ul class="right">
				<li><a href={{ route('web.viender.socialite.pages.read') }}>Feed</a></li>
				<li><a href={{ route('web.viender.socialite.pages.answer') }}>Questions</a></li>
				@if (Auth::guest())
					<li><a href="{{ url('/login') }}">Login</a></li>
					<li><a href="{{ url('/register') }}">Register</a></li>
				@else
					<li><a href={{ route('web.viender.profile.pages.profile', \Auth::user()->username) }}>You</a></li>
				@endif
			</ul>
		</div>


		<ul id="dropdown1" class="dropdown-content">
			<li>
				<a href="{{ url('/logout') }}"
					onclick="event.preventDefault();
							 document.getElementById('logout-form').submit();">
					Logout
				</a>

				<form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
					{{ csrf_field() }}
				</form>
			</li>
		</ul>
	</nav>
</div>