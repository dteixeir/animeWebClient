// Generated on 2016-06-18 using generator-angular 0.15.1
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var openURL = require('open');
var lazypipe = require('lazypipe');
var rimraf = require('rimraf');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');

var yeoman = {
  app: require('./bower.json').appPath || 'app'
};

var paths = {
  scripts: ['app/**/*.js'],
  styles: ['app/styles/**/*.scss'],
  views: ['app/**/*.html']
};

////////////////////////
// Reusable pipelines //
////////////////////////

var styles = lazypipe()
  .pipe($.sass, {
    outputStyle: 'expanded',
    precision: 10
  })
  .pipe($.autoprefixer, 'last 1 version')
  .pipe(gulp.dest, 'app/styles');

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(styles());
});

gulp.task('start:client', function () {
  openURL('http://localhost:9000');
});

gulp.task('start:server', function() {
  $.connect.server({
    root: [yeoman.app],
    livereload: true,
    // Change this to '0.0.0.0' to access the server from outside.
    port: 9000
  });
});

// inject bower components
gulp.task('bower', function () {
  return gulp.src(yeoman.app + '/index.html')
    .pipe(wiredep({
      directory: yeoman.app + '/bower_components',
      ignorePath: '..'
    }))
  .pipe(gulp.dest(yeoman.app));
});

//rimrafs
gulp.task('css:clean', function(cb){
  rimraf('app/styles/main.css', cb);
});

// run sequences!
gulp.task('serve', function (cb) {
    runSequence(
    ['start:client'],
    ['start:server'],
    ['css:clean'],
    ['styles'],
    ['bower'], cb);
});

gulp.task('default', function(cb) {
  runSequence(
    ['css:clean'],['styles'], ['bower']
  )
});