'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var nodemon = require('gulp-nodemon');
server = require( 'gulp-develop-server' );


// run server
gulp.task( 'server:start', function() {
    server.listen( { path: './app.js' } );
});

// restart server if app.js changed
gulp.task( 'server:restart', function() {
    gulp.watch( [ './app.js' ], server.restart );
});