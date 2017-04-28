let webpack = require('webpack');
const {mix} = require('laravel-mix');
let path = require('path');
let fileSystem = require('fs');
require('dotenv').config({path: './viender/.env'});

let apps = fileSystem.readdirSync(path.resolve(__dirname, 'apps/'));

let config = {
    output: {
        path: path.resolve(__dirname, 'public/'),
    },
    resolve: {
        alias: {
          viender: path.resolve(__dirname, 'viender'),
          viender_core: path.resolve(__dirname, 'resources/assets'),
        },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          APP_ENV: JSON.stringify(process.env.APP_ENV),
          APP_URL: JSON.stringify(process.env.APP_URL),
          APP_API_URL: JSON.stringify(process.env.APP_API_URL),
          APP_DOMAIN: JSON.stringify(process.env.APP_DOMAIN),
          APP_API_DOMAIN: JSON.stringify(process.env.APP_API_DOMAIN),
        },
      }),
    ],
};

for(let i=0; i < apps.length; i++) {
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

let pages = '';
let pagesPath = '';
let compileds = [];
let publicPath = '';

compileds.push(
  publicPath + 'js/core.js',
  publicPath + 'css/core.css',
  publicPath + 'css/core-mobile.css',
  publicPath + 'js/app.js',
  publicPath + 'css/app-mobile.css',
  publicPath + 'css/app.css'
);

mix.js('resources/assets/js/core.js', 'js/core.js')
   .sass('resources/assets/sass/core.scss', 'css/core.css')
   .sass('resources/assets/sass/core-mobile.scss', 'css/core-mobile.css');

mix.js('viender/resources/assets/js/app.js', 'js/app.js')
   .sass('viender/resources/assets/sass/app-mobile.scss', 'css/app-mobile.css')
   .sass('viender/resources/assets/sass/app.scss', 'css/app.css');

for(let i=0; i < apps.length; i++) {
  pagesPath = path.resolve(__dirname, 'apps/' + apps[i] + '/resources/pages');

  if (fileSystem.existsSync(pagesPath)) {
    pages = fileSystem.readdirSync(pagesPath);

    for(let j=0; j < pages.length; j++) {
      let compiledAppJsPath = 'js/viender/' + apps[i] + '/' + pages[j] + '/app.js';
      let compiledAppMobileJsPath = 'js/viender/' + apps[i] + '/' + pages[j] + '/app-mobile.js';
      let compiledAppCssPath = 'css/viender/' + apps[i] + '/' + pages[j] + '/app.css';
      let compiledAppMobileCssPath = 'css/viender/' + apps[i] + '/' + pages[j] + '/app-mobile.css';

      compileds.push(
        publicPath + compiledAppJsPath,
        publicPath + compiledAppMobileJsPath,
        publicPath + compiledAppCssPath,
        publicPath + compiledAppMobileCssPath
      );

      mix.js('apps/' + apps[i]
            + '/resources/pages/' + pages[j] + '/assets/js/app.js', compiledAppJsPath)
         .js('apps/' + apps[i]
            + '/resources/pages/' + pages[j] + '/assets/js/app-mobile.js', compiledAppMobileJsPath)
         .sass('apps/' + apps[i]
            + '/resources/pages/' + pages[j] + '/assets/sass/app.scss', compiledAppCssPath)
         .sass('apps/' + apps[i]
            + '/resources/pages/' + pages[j] + '/assets/sass/app-mobile.scss', compiledAppMobileCssPath);
    }
  }
}

mix.copy('node_modules/sw-toolbox/sw-toolbox.js', 'public/js/vendor/sw-toolbox/sw-toolbox.js');
mix.copy('node_modules/font-awesome/fonts', 'public/fonts/font-awesome/4.7.0/fonts', true);
mix.copy('node_modules/font-awesome/fonts', 'public/fonts', false);
mix.copy('node_modules/tinymce/plugins', 'public/js/plugins', false);
mix.copy('node_modules/tinymce/themes', 'public/js/themes', false);
mix.copy('node_modules/tinymce/skins', 'public/js/skins', false);
mix.version();

if (mix.config.inProduction) {

} else {
  mix.sourceMaps();
}

if (process.argv.indexOf('getAppPaths') > -1) {
    console.log(Object.keys(config.resolve.alias).map((key) => {
        return config.resolve.alias[key];
    }).join(', '));
}
