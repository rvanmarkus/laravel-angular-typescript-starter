var elixir = require('laravel-elixir');
var elixirTypscript = require('elixir-typescript');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
require('laravel-elixir-wiredep');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsd.json', { sortOutput: true });

var paths = {
 'bootstrap': './public/bower_components/bootstrap-sass-official/assets/'
};

var wiredepOptions = {
 baseDir: 'resources/views/layout/',    //the folder for your views
 searchLevel: '**/*.php' //How many search levels you want
};

elixir(function(mix) {

 mix.sass('app.scss', 'public/css/', {includePaths: [paths.bootstrap + 'stylesheets/']})
     .typescript('app.js', 'public/js', tsProject)
     .wiredep(wiredepOptions);
});

