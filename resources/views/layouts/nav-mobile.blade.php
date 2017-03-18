<nav>
	<div class="nav-wrapper">
		<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
		<a class="brand-logo hide-on-med-and-down" href="{{ url('/') }}">
		{{ config('app.name', 'Laravel') }}
		</a>
	
		<ul class="right">
			@if (Auth::guest())
				<li><a href="{{ url('/login') }}">Login</a></li>
				<li><a href="{{ url('/register') }}">Register</a></li>
			@endif
		</ul>

		<ul class="side-nav" id="mobile-demo">
			<li>
				@if (Auth::user())
					<a href="{{ url('/logout') }}"
						onclick="event.preventDefault();
								 document.getElementById('logout-form').submit();">
						Logout
					</a>
					<form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
						{{ csrf_field() }}
					</form>
				@endif
			</li>
		</ul>
	</div>


	<ul class="side-nav" id="mobile-demo">
		<li><a href="sass.html">Sass</a></li>
		<li><a href="badges.html">Components</a></li>
		<li><a href="collapsible.html">Javascript</a></li>
		<li><a href="mobile.html">Mobile</a></li>
	</ul>

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