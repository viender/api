<template>
    <div class="profileMenu" @click="close()">
        <sneakpeek ref="sneakpeek" v-show="showSneakpeek">
            <ul class="collection">
                <li class="collection-item grey-text text-darken-2">Profile<i class="fa fa-times" aria-hidden="true" style="float: right;" @click="setShow(false);"></i></li>
                <li class="collection-item" @click="setActiveMenu($event, 0)">Edit Profile</li>
                <li class="collection-item" @click="setActiveMenu($event, 1)">Setting</li>
                <li class="collection-item" @click="setActiveMenu($event, 2)">About</li>
                <li class="collection-item" @click="setActiveMenu($event, 3)">Contact Us</li>
            </ul>
        </sneakpeek>
        <overlay v-show="showMenuContent" @back="closeMenu()">
            <strong slot="title">{{ activeMenu ? activeMenu.title : '' }}</strong>
            <div slot="content">
                <edit-profile :url="updateProfileUrl" v-show="menus.indexOf(activeMenu) === 0"></edit-profile>
            </div>
        </overlay>
    </div>
</template>

<script>
export default {
    props: ['updateProfileUrl'],

    data() {
        return {
            show: false,
            showSneakpeek: true,
            showMenuContent: false,
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

    methods: {
        open() {
            this.$refs.sneakpeek.open();
        },

        close() {
            this.$refs.sneakpeek.close();
        },

        openMenu() {
            // this.showSneakpeek = false;
            this.showMenuContent = true;
        },

        closeMenu() {
            // this.showSneakpeek = true;
            this.showMenuContent = false;
        },

        setActiveMenu(e, index) {
            e.stopPropagation();
            this.activeMenu = this.menus[index];
            this.openMenu();
            Materialize.updateTextFields();
        },
    },
};
</script>
