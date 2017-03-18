/**
 * Helper function to get full path of an url
 *
 * @param  String path
 * @return String
 */

window.url = function url(path) {
    if(path[0] === '/') {
        return treasure.env.url + path;
    }

    return treasure.env.url + '/' + path;
}

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
}

window.getUrl = function getUrl(rel, obj) {
	return obj.links.filter(function(link) {
		return link.rel == rel;
	})[0].url;
}