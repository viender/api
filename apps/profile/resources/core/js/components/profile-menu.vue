<template>
    <div class="profileMenu" @click="setShow(false)">
        <transition name="fade">
            <div class="profileMenu-container" v-show="show">
                <div :class="classes">
                    <ul class="collection">
                        <li class="collection-item grey-text text-darken-2">Profile<i class="fa fa-times" aria-hidden="true" style="float: right;" @click="setShow(false);"></i></li>
                        <li class="collection-item" @click="setActiveMenu($event, 0)">Edit Profile</li>
                        <li class="collection-item" @click="setActiveMenu($event, 1)">Setting</li>
                        <li class="collection-item" @click="setActiveMenu($event, 2)">About</li>
                        <li class="collection-item" @click="setActiveMenu($event, 3)">Contact Us</li>
                    </ul>
                </div>
            </div>
        </transition>
        <div class="profileMenu-content" v-show="activeMenu" @click="$event.stopPropagation()">
            <div class="row overlay-header">
                <div class="col s12">
                    <div class="back-button">
                        <i class="fa fa-angle-left fa-2x" style="line-height: 142%;" aria-hidden="true" @click="activeMenu = null"></i>
                        <div class="profileMenu-content-title">
                            <strong>{{ activeMenu ? activeMenu.title : '' }}</strong>
                        </div>
                    </div>
                </div>
            </div>
            <edit-profile :url="updateProfileUrl" v-show="menus.indexOf(activeMenu) === 0"></edit-profile>
        </div>
    </div>
</template>

<script>
export default {
    props: ['updateProfileUrl'],

    data() {
        return {
            show: false,
            showContent: false,
            activeMenu: null,
            menus: [
                {
                    title: 'Edit Profile',
                },
                {
                    title: 'Setting',
                },
                {
                    title: 'About',
                },
                {
                    title: 'Contact Us',
                },
            ],
        };
    },

    computed: {
        classes() {
            return {
                'profileMenu-items': true,
                'active': this.showContent,
            };
        },
    },

    methods: {
        setShow(show) {
            if(!show) {
                this.showContent = false;
                setTimeout((show) => {
                    this.show = show;
                }, 100);
                $('body').css('overflow-y', 'auto');
            } else {
                this.showContent = true;
                this.show = show;
                $('body').css('overflow', 'hidden');
            }
        },

        setActiveMenu(e, index) {
            e.stopPropagation();
            this.activeMenu = this.menus[index];
            Materialize.updateTextFields();
        },
    },
};
</script>

<style>
    .profileMenu-container {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(0,0,0,0.8);
    }

    .profileMenu-items {
        position: absolute;
        transform: translateY(100%);
        transition: all .3s;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .profileMenu-content {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background-color: #fff;
        padding: 52px 10px 10px 10px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .profileMenu-content-title {
        display: block;
        height: 100%;
        margin-top: -28px;
        margin-left: 22px;
    }

    .profileMenu-items.active {
        transform: translateY(0);
    }

    .profileMenu-items .collection {
        border: 0;
        margin-bottom: 0;
        border-radius: 10px 10px 0 0;
    }

    .profileMenu-items .collection-item {
        text-align: center;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .3s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
      opacity: 0
    }
</style>
