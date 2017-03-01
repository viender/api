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

mix.js('viender/resources/assets/js/app.js', 'js')
   .sass('viender/resources/assets/sass/app.scss', 'css');

mix.js('mytutor/resources/feed/assets/js/app.js', 'js/viender/mytutor/feed/app.js')
   .sass('mytutor/resources/feed/assets/sass/app.scss', 'css/viender/mytutor/feed/app.css')
   .js('mytutor/resources/postTutoring/assets/js/app.js', 'js/viender/mytutor/postTutoring/app.js')
   .sass('mytutor/resources/postTutoring/assets/sass/app.scss', 'css/viender/mytutor/postTutoring/app.css')
   .js('mytutor/resources/postBid/assets/js/app.js', 'js/viender/mytutor/postBid/app.js')
   .sass('mytutor/resources/postBid/assets/sass/app.scss', 'css/viender/mytutor/postBid/app.css')
   .js('mytutor/resources/showTutoring/assets/js/app.js', 'js/viender/mytutor/showTutoring/app.js')
   .sass('mytutor/resources/showTutoring/assets/sass/app.scss', 'css/viender/mytutor/showTutoring/app.css');

mix.js('socialite/resources/answer/assets/js/app.js', 'js/viender/socialite/answer/app.js');
mix.js('socialite/resources/feed/assets/js/app.js', 'js/viender/socialite/feed/app.js');

mix.copy('node_modules/vue-material/dist/vue-material.css', 'viender/public/css/vue-material.css');

mix.version();