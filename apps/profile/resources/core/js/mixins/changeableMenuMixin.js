export default {
    data() {
    	return {
    		selectedMenu: null,
            notMounted: true,
            nav: null,
            scrollStorageName: null,
    	};
    },


    methods: {
        initTab(nav = null, scrollStorageName = null) {
            if ( ! nav) throw 'this.nav is not defined';
            if ( ! scrollStorageName) throw 'this.scrollStorageName is not defined';

            this.nav = nav;
            this.scrollStorageName = scrollStorageName;

            const selectedMenu = parseInt(this.nav.getAttribute('initial-menu'), 10);

            if (localStorage.getItem(`${this.scrollStorageName}.scrollLeft`)) {
                this.nav.scrollLeft = localStorage.getItem(`${this.scrollStorageName}.scrollLeft`);
            } else {
                this.nav.scrollLeft = 65 * selectedMenu;
            }

            this.setCurrentMenu(selectedMenu);

            if (this.$refs.profileContentMobile)
                this.$refs.profileContentMobile.style.display = 'block';
        },

        currentMenu(menu) {
            return this.selectedMenu === menu;
        },

        setCurrentMenu(selectedMenu) {
            localStorage.setItem(`${this.scrollStorageName}.scrollLeft`, this.nav.scrollLeft);
    		this.selectedMenu = selectedMenu;

            const page = this.nav.getElementsByClassName('navigationLink')[selectedMenu].getAttribute('page');
            const url = this.nav.getElementsByClassName('navigationLink')[selectedMenu].getAttribute('href');

            this.$viender.helpers.pushState({page, url});
    	},

        hideBeforeMountedPreloaders() {
            this.notMounted = false;
        }
    }
}
