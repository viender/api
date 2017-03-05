/**
 * Helper function to get full path of an url
 *
 * @param  String path
 * @return String
 */

window.url = function url(path) {
    if(path[0] === '/') {
        return config.app.url + path;
    }

    return config.app.url + '/' + path;
}

/**
 * Helper function to get full path of an api url
 *
 * @param  String path
 * @return String
 */
window.api = function api(path) {
    if(path[0] === '/') {
        return config.api_url + path;
    }

    return config.api_url + '/' + path;
}