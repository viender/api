export default {
    pushState(payload) {
        if (window.history ? window.history.pushState : false) {
            window.history.pushState({
                Page: payload.page,
                Url: payload.url,
            }, payload.page, payload.url);
        }

        if (window.ga) {
            ga('set', 'page', relativeUrl(payload.url));
            ga('send', 'pageview');
        }
    },
};
