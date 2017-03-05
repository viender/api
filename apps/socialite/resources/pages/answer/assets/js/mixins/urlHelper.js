module.exports = {

	methods: {
		getUrl(rel, obj) {
			return obj.links.filter(function(link) {
				return link.rel == rel;
			})[0].url;
		},

		url(path) {
			return window.url(path);
		}
	}
}