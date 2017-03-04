const { mix } = require('laravel-mix'); 
var path = require('path'); 
 
mix.webpackConfig({ 
    output: { 
        path: path.resolve(__dirname, "public/") 
    },
    resolve: {
        alias: {
            viender_core: path.resolve(__dirname, 'assets/'),
        }
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
 
mix.js('src/viender/resources/assets/js/app.js', 'js') 
   .sass('src/viender/resources/assets/sass/app.scss', 'css'); 
 
mix.js('src/apps/mytutor/resources/feed/assets/js/app.js', 'js/viender/mytutor/feed/app.js') 
   .sass('src/apps/mytutor/resources/feed/assets/sass/app.scss', 'css/viender/mytutor/feed/app.css') 
   .js('src/apps/mytutor/resources/postTutoring/assets/js/app.js', 'js/viender/mytutor/postTutoring/app.js') 
   .sass('src/apps/mytutor/resources/postTutoring/assets/sass/app.scss', 'css/viender/mytutor/postTutoring/app.css') 
   .js('src/apps/mytutor/resources/postBid/assets/js/app.js', 'js/viender/mytutor/postBid/app.js') 
   .sass('src/apps/mytutor/resources/postBid/assets/sass/app.scss', 'css/viender/mytutor/postBid/app.css') 
   .js('src/apps/mytutor/resources/showTutoring/assets/js/app.js', 'js/viender/mytutor/showTutoring/app.js') 
   .sass('src/apps/mytutor/resources/showTutoring/assets/sass/app.scss', 'css/viender/mytutor/showTutoring/app.css'); 
 
mix.js('src/apps/socialite/resources/answer/assets/js/app.js', 'js/viender/socialite/answer/app.js')
   .sass('src/apps/socialite/resources/answer/assets/sass/app.scss', 'css/viender/socialite/answer/app.css')
   .js('src/apps/socialite/resources/feed/assets/js/app.js', 'js/viender/socialite/feed/app.js')
   .js('src/apps/socialite/resources/feed/assets/js/app-mobile.js', 'js/viender/socialite/feed/app-mobile.js')
   .sass('src/apps/socialite/resources/feed/assets/sass/app.scss', 'css/viender/socialite/feed/app.css')
   .sass('src/apps/socialite/resources/feed/assets/sass/app-mobile.scss', 'css/viender/socialite/feed/app-mobile.css');
 
mix.version();