const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');


 
gulp.task('default', () =>
    gulp.src('src/*')
        .pipe(imagemin([imagemin.gifsicle(), imageminMozjpeg(), imageminPngquant(), imagemin.svgo()]))
        .pipe(gulp.dest('gulp'))
);