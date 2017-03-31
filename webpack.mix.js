var webpack = require('webpack');
const { mix } = require('laravel-mix'); 
var path = require('path'); 
var fileSystem = require('fs');
require('dotenv').config({path: './viender/.env'});

var apps = fileSystem.readdirSync(path.resolve(__dirname, 'apps/'));

var config = { 
    output: { 
        path: path.resolve(__dirname, "public/") 
    },
    resolve: {
        alias: {
          viender: path.resolve(__dirname, 'viender'),
          viender_core: path.resolve(__dirname, 'resources/assets'),
        }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          APP_ENV: JSON.stringify(process.env.APP_ENV),
          APP_URL: JSON.stringify(process.env.APP_URL),
          APP_API_URL: JSON.stringify(process.env.APP_API_URL),
          APP_DOMAIN: JSON.stringify(process.env.APP_DOMAIN),
          APP_API_DOMAIN: JSON.stringify(process.env.APP_API_DOMAIN),
        }
      })
    ]
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
 
mix.js('resources/assets/js/core.js', 'js');

mix.js('viender/resources/assets/js/app.js', 'js')
   .sass('viender/resources/assets/sass/app-mobile.scss', 'css')
   .sass('viender/resources/assets/sass/app.scss', 'css');

var pages = '';
var pagesPath = '';

for(var i=0; i < apps.length; i++) {
  pagesPath = path.resolve(__dirname, 'apps/' + apps[i] + '/resources/pages');

  if (fileSystem.existsSync(pagesPath)) {
    pages = fileSystem.readdirSync(pagesPath);

    for(var j=0; j < pages.length; j++) {
      mix.js('apps/' + apps[i] + '/resources/pages/' + pages[j] + '/assets/js/app.js', 'js/viender/' + apps[i] + '/' + pages[j] + '/app.js')
         .js('apps/' + apps[i] + '/resources/pages/' + pages[j] + '/assets/js/app-mobile.js', 'js/viender/' + apps[i] + '/' + pages[j] + '/app-mobile.js')
         .sass('apps/' + apps[i] + '/resources/pages/' + pages[j] + '/assets/sass/app.scss', 'css/viender/' + apps[i] + '/' + pages[j] + '/app.css')
         .sass('apps/' + apps[i] + '/resources/pages/' + pages[j] + '/assets/sass/app-mobile.scss', 'css/viender/' + apps[i] + '/' + pages[j] + '/app-mobile.css');
    }
  }
}

mix.version();
