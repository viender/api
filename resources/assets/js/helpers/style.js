export default {
    disableScroll(element) {
        element.style.overflowY = 'hidden';
    },

    enableScroll(element) {
        element.style.overflowY = 'auto';
    },

    disableBodyScroll() {
        this.disableScroll(document.getElementsByTagName('body')[0]);
    },

    enableBodyScroll() {
        this.enableScroll(document.getElementsByTagName('body')[0]);
    },
}
