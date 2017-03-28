export default {
    data() {
    	return {
    		selectedMenu: null,
    	};
    },

    mounted() {
        if ( ! this.$refs.profileNav) return;

        const selectedMenu = parseInt(this.$refs.profileNav.getAttribute('initial-menu'), 10);

        if (localStorage.getItem('profileNavigation.scrollLeft')) {
            this.$refs.profileNav.scrollLeft = localStorage.getItem('profileNavigation.scrollLeft');
        } else {
            this.$refs.profileNav.scrollLeft = 65 * selectedMenu;
        }

        this.setCurrentMenu(selectedMenu);
    },

    methods: {
        currentMenu(menu) {
            return this.selectedMenu === menu;
        },

        setCurrentMenu(selectedMenu) {
            localStorage.setItem('profileNavigation.scrollLeft', this.$refs.profileNav.scrollLeft);
    		this.selectedMenu = selectedMenu;

            if (window.history ? window.history.pushState : false) {
                const page = this.$refs.profileNav.getElementsByClassName('navigationLink')[selectedMenu].getAttribute('page');
                const url = this.$refs.profileNav.getElementsByClassName('navigationLink')[selectedMenu].getAttribute('href');
                window.history.pushState({
                    Page: page,
                    Url: url,
                }, page, url)
            }
    	}
    }
}
