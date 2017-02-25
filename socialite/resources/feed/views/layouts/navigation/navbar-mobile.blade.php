<div class="navbar-mobile">
    <ul class="nav nav-tabs tabs-4 bg-primary" id="mobile-menu-head">
        <!--Search Form-->
        <form class="form-inline float-xs-right" style="width: 100%;">
            <input class="form-control" type="text" placeholder="Ask Viender" style="border-bottom: none; width: 100%;">
        </form>
        <!--Collapse button-->
        <li>
            <div  class="nav-item waves-effect waves-light">
                <span><a href="#" data-activates="mobile-menu" class="button-collapse" id="mobile-menu-button" style="text-align: left;"><i class="fa fa-bars white-text"></i></a></span>
            </div>
        </li>
        @include('layouts.navigation.navbar-items')
    </ul>
    <ul class="side-nav blue-grey lighten-5" id="mobile-menu">
        <h3 style="padding: 20px">Viender</h3>
        @include('layouts.navigation.navbar-items')
    </ul>
</div>