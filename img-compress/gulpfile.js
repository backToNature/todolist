const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const gulpif = require('gulp-if');

const uglify = require('gulp-uglify');
const pump = require('pump');

const cleanCSS = require('gulp-clean-css');
const path = require('path');

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
        .pipe(gulpif(condition1, imagemin([imagemin.gifsicle(), imageminMozjpeg(), imageminPngquant(), imagemin.svgo()])))
        .pipe(gulpif(condition2, uglify()))
        .pipe(gulpif(condition3, cleanCSS({compatibility: 'ie8'})))
        .pipe(gulp.dest('gulp'))
);