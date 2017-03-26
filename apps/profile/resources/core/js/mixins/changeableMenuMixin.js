export default {
    data() {
    	return {
    		selectedMenu: null,
    	};
    },

    mounted() {
        if( ! this.$refs.profileNav) return;

        this.selectedMenu = parseInt(this.$refs.profileNav.getAttribute('initial-menu'), 10);
    },

    methods: {
    	currentMenu(menu) {
    		return this.selectedMenu === menu;
    	},

    	setCurrentMenu(selectedMenu) {
    		this.selectedMenu = selectedMenu;
    	}
    }
}
