let mix = require('laravel-mix');

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

mix.setPublicPath('public').setResourceRoot('../').vue()
    //.sass('resources/sass/frontend/app.scss', 'public/css/frontend.css')
    //.sass('resources/sass/backend/app.scss', '../resources/tmp/css/backend.css')
    //.sass(`resources/sass/backend/app.scss`, 'public/css/backend.css', {implementation: require('node-sass')})
    // .styles([
    //     //'resources/tmp/css/backend.css',
    //     'node_modules/jquery-datetimepicker/build/jquery.datetimepicker.min.css'
    // ], 'public/css/backend.css')
    .js('resources/js/app.js', 'public/js/frontend.js')
    
    .extract([
        'jquery',
        'bootstrap',
        'popper.js',
        'axios',
        'sweetalert2',
        'lodash'
    ])
    .sourceMaps();

if(mix.inProduction){
    mix.version();
} else {
    // Uses inline source-maps on development
    mix.webpackConfig({
        devtool: 'inline-source-map'
    });
}