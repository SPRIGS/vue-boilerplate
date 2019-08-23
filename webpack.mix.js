let mix = require('laravel-mix');

var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
mix.webpackConfig({
    plugins: [new HardSourceWebpackPlugin()]
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

mix.options({
    processCssUrls: false
})
    .sourceMaps(false, 'source-map')
    .js('resources/assets/js/app.js', 'public/assets/dist/js/')
    .sass('resources/assets/sass/app.scss', 'public/assets/dist/css/');
