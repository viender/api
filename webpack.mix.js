const { mix } = require('laravel-mix'); 
var path = require('path'); 

var fs = require('fs');

var apps = fs.readdirSync(path.resolve(__dirname, 'apps/'));

var config = { 
    output: { 
        path: path.resolve(__dirname, "public/") 
    },
    resolve: {
        alias: {
          viender_core: path.resolve(__dirname, 'assets/core'),
        }
    }
};

for(var i=0; i < apps.length; i++) {
  if(apps[i] == 'core') continue;
  config.resolve.alias['viender_' + apps[i]] = path.resolve(__dirname, 'apps/' + apps[i] + '/resources');
}

mix.webpackConfig(config);
 
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

var pages = '';
var pagesPath = '';

for(var i=0; i < apps.length; i++) {
  pagesPath = path.resolve(__dirname, 'apps/' + apps[i] + '/resources/pages');

  if (fs.existsSync(pagesPath)) {
    pages = fs.readdirSync(pagesPath);

    for(var j=0; j < pages.length; j++) {
      mix.js('apps/' + apps[i] + '/resources/pages/' + pages[j] + '/assets/js/app.js', 'js/viender/' + apps[i] + '/' + pages[j] + '/app.js')
         .js('apps/' + apps[i] + '/resources/pages/' + pages[j] + '/assets/js/app-mobile.js', 'js/viender/' + apps[i] + '/' + pages[j] + '/app-mobile.js')
         .sass('apps/' + apps[i] + '/resources/pages/' + pages[j] + '/assets/sass/app.scss', 'css/viender/' + apps[i] + '/' + pages[j] + '/app.css')
         .sass('apps/' + apps[i] + '/resources/pages/' + pages[j] + '/assets/sass/app-mobile.scss', 'css/viender/' + apps[i] + '/' + pages[j] + '/app-mobile.css');
    }
  }
}

mix.version();