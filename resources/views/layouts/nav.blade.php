<div class="navbar-fixed">
	<nav>
		<div class="nav-wrapper">
			<a class="brand-logo" href="{{ url('/') }}">
			{{-- {{ config('app.name', 'Laravel') }} --}}
			</a>
		
			<ul class="right">
				@if (Auth::guest())
					<li><a href="{{ url('/login') }}">Login</a></li>
					<li><a href="{{ url('/register') }}">Register</a></li>
				@else
					<li><a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
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