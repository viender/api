const { mix } = require('laravel-mix');
var path = require('path');

mix.webpackConfig({
    output: {
	    path: path.resolve(__dirname, "viender/public/")
	}
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('./viender/resources/assets/js/app.js', 'js')
   .sass('./viender/resources/assets/sass/app.scss', 'css');

mix.js('./mytutor/resources/feed/assets/js/feed.js', 'js/viender/mytutor/feed.js')
   .sass('./mytutor/resources/feed/assets/sass/feed.scss', 'css/viender/mytutor/feed.css')
   .js('./mytutor/resources/postTutoring/assets/js/postTutoring.js', 'js/viender/mytutor/postTutoring.js')
   .sass('./mytutor/resources/postTutoring/assets/sass/postTutoring.scss', 'css/viender/mytutor/postTutoring.css')
   .js('./mytutor/resources/postBid/assets/js/postBid.js', 'js/viender/mytutor/postBid.js')
   .sass('./mytutor/resources/postBid/assets/sass/postBid.scss', 'css/viender/mytutor/postBid.css')
   .js('./mytutor/resources/showTutoring/assets/js/showTutoring.js', 'js/viender/mytutor/showTutoring.js')
   .sass('./mytutor/resources/showTutoring/assets/sass/showTutoring.scss', 'css/viender/mytutor/showTutoring.css');

mix.copy('node_modules/vue-material/dist/vue-material.css', 'viender/public/css/vue-material.css');

mix.version();