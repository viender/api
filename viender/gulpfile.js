const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix.sass('app.scss')
       .webpack('app.js')
       .webpack('./../mytutor/resources/assets/js/browse/browse.js', 'viender_mytutor_browse.js')
       .webpack('./../mytutor/resources/assets/js/browse/dashboard.js', 'viender_mytutor_dashboard.js')
       .webpack('./../mytutor/resources/assets/js/browse/postTutoring.js', 'viender_mytutor_postTutoring.js')
       .webpack('./../mytutor/resources/assets/js/browse/showTutoring.js', 'viender_mytutor_showTutoring.js');
});
