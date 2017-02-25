<template id="navigation-template">
    <div class="navbar-desktop row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="col-md-1">
                <!--Navbar Brand-->
                <a class="navbar-brand" :href="url('/')">Viender</a>
            </div>
            <div class="col-md-11">
                <!--Search Form-->
                <div :style="'width: calc(100% - ' + rightMenusWidth + 'px); display: inline-block;'">
                    <ask-form></ask-form>
                </div>
            
                <!--Navbar Items-->
                <ul slot="nav-items" class="nav navbar-nav float-xs-right" ref="rightMenus">
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link" href="/"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Feed <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link" href="/answer"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Questions</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link waves-effect waves-light" href="#">1<i class="fa fa-bell" aria-hidden="true"></i></a>
                    </li>
                    <li class="nav-item avatar active dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-light" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <img :src="Auth.user().avatar_url" class="img-fluid rounded-circle">
                        </a>
                        <div class="dropdown-menu dropdown-warning" aria-labelledby="dropdownMenu1" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                            <a class="dropdown-item waves-effect waves-light" :href="'/profile/' + Auth.user().username">Profile</a>
                            <a class="dropdown-item waves-effect waves-light" href="#" @click="Auth.user().logout()">Logout</a>
                        </div>
                    </li>

                </ul>                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        template: "#navigation-template",

        mixins: [authMixin],

        data() {
            return {
                rightMenusWidth: 273,
            }
        },

        mounted() {
            var vm = this;

            bus.$on('askForm.click', function() {
                vm.rightMenusWidth = 0;
                $(vm.$refs.rightMenus).css('display', 'none');
            });

            bus.$on('overlay.click', function() {
                vm.rightMenusWidth = 273;
                $(vm.$refs.rightMenus).css('display', 'inline-block');
            });
        },

        methods: {
            url: url,
        }
    }
</script>