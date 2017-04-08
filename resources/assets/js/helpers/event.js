export default {
    stopPropagation(event) {
        console.log('will stop propagation');
        if (event) event.stopPropagation();
    }
}
