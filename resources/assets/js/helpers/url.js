/**
 * Helper function to get full path of an url
 *
 * @param  String path
 * @return String
 */

window.url = function url(path) {
    if(path[0] === '/') {
        return window.location.origin + path;
    }

    return window.location.origin + '/' + path;
};

/**
 * Helper function to get full path of an api url
 *
 * @param  String path
 * @return String
 */
window.api = function api(path) {
    if(path[0] === '/') {
        return treasure.env.api_url + path;
    }

    return treasure.env.api_url + '/' + path;
};

window.getUrl = function getUrl(rel, obj) {
    if (! obj) return '';

	const result = obj.links.filter(function(link) {
		return link.rel == rel;
	})[0];

    return result ? result.url : window.location.origin;
};

/**
 * Helper function to clean host path from url
 *
 * @param  String path
 * @return String
 */

window.relativeUrl = function url(path) {
    return path.replace(window.location.origin, '');
};

export default {
    url: url,
    api: api,
    getUrl: getUrl,
    relativeUrl: relativeUrl,
};
