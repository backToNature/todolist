const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
const gulpif = require('gulp-if');
const uglify = require('uglify-es');
const composer = require('gulp-uglify/composer');
const pump = require('pump');
const path = require('path');
const minify = composer(uglify, console);


var condition1 = function (file) {
    var fileExt = ['.jpg', '.png', '.gif', '.ico'];
    if (fileExt.indexOf(path.extname(file.path)) >= 0) {
        return true;
    }
};

var condition2 = function (file) {
    var fileExt = ['.js'];
    if (fileExt.indexOf(path.extname(file.path)) >= 0) {
        return true;
    }
};

var condition3 = function (file) {
    var fileExt = ['.css'];
    if (fileExt.indexOf(path.extname(file.path)) >= 0) {
        return true;
    }
};


gulp.task('default', () =>
    gulp.src('src/**/*')
        .pipe(gulpif(condition1, imagemin([imageminGifsicle(), imageminMozjpeg(), imageminPngquant(), imageminSvgo()])))
        .pipe(gulpif(condition2, minify({})))
        .pipe(gulpif(condition3, cleanCSS({compatibility: 'ie8'})))
        .pipe(gulp.dest('dist'))
);
