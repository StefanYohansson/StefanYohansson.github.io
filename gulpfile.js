'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');

function libs() {
  return gulp.src([
    './node_modules/purecss/build/pure-min.css',
    './node_modules/purecss/build/grids-responsive-min.css',
    './node_modules/whatwg-fetch/fetch.js'
  ])
  .pipe(gulp.dest('./lib'));
}

function compileSass() {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
}

function watchSass() {
  gulp.watch('./sass/**/*.scss', compileSass);
}

function minify() {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css/dist'));
}

function compress(cb) {
  pump([
    gulp.src(['lib/fetch.js', 'lib/main.js']),
    uglify({ mangle: true, compress: true }),
    gulp.dest('./lib/dist')
  ],
    cb
  );
}

exports.libs = libs;
exports.sass = compileSass;
exports.watch = watchSass;
exports.minify = minify;
exports.compress = compress;
exports.default = gulp.series(libs, compileSass, minify);
