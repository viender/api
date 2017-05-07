module.exports = {

	methods: {
		getUrl(rel, obj) {
            if (!obj.links) return null;

			return obj.links.filter((link) => {
				return link.rel == rel;
			})[0].url;
		},

		url(path) {
			return window.url(path);
		},
	},
};
