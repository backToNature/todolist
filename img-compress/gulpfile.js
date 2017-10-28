const gulp = require('gulp');

const gulpif = require('gulp-if');
const path = require('path');

// 图片压缩
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

// js压缩混淆



// css压缩

var condition1 = function (file) {
    var fileExt = ['.jpg', '.png', '.gif', '.ico'];
    if (fileExt.indexOf(path.extname(file.path)) >= 0) {
        return true;
    }
};

gulp.task('default', () =>
    gulp.src('src/**/*')
        .pipe(gulpif(condition1, imagemin([imageminGifsicle(), imageminMozjpeg(), imageminPngquant(), imageminSvgo()])))
        .pipe(gulp.dest('dist'))
);
