'use strict';

import gulp from 'gulp';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import rimraf from 'gulp-rimraf';
import bs from 'browser-sync';
const browserSync = bs.create();

const paths = {
    src: {
        js: 'src/scripts/',
        vendors: 'src/scripts/vendors/',
        css: 'src/style/',
        html: 'src/',
        assets: 'src/assets/'
    },
    dest: {
        js: 'dist/',
        vendors: 'dist/',
        css: 'dist/',
        html: 'dist/',
        assets: 'dist/assets/'
    }
};

gulp.task('html', function () {
    gulp.src(`${paths.src.html}index.html`)
        //.pipe(rimraf(paths.dest.index))
        .pipe(gulp.dest(paths.dest.html))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['html', 'assets', 'js', 'vendors', 'sass'], function() {

    browserSync.init({
        server: paths.dest.html
    });

    gulp.watch(paths.src.js + '*.js', ['js']).on('change', browserSync.reload);
    gulp.watch(paths.src.css + '*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch(paths.src.html + '*.html', ['html']).on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(paths.src.css + '*.scss')
        .pipe(sass())
        .on('error', notify.onError('Sass error!'))
        .pipe(gulp.dest(paths.dest.css))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src([`${paths.src.js}*.js`])
        .pipe(babel())
        .on('error', notify.onError('Javascript error!'))
        .pipe(gulp.dest(paths.dest.js))
        .pipe(browserSync.stream());
});

gulp.task('vendors', () => {
    return gulp.src([`${paths.src.vendors}*.js`])
        .on('error', notify.onError('Javascript Vendors error!'))
        .pipe(gulp.dest(paths.dest.vendors));
});

gulp.task('assets', () => {
    return gulp.src([`${paths.src.assets}**/*.*`])
        .on('error', notify.onError('Assets error!'))
        .pipe(gulp.dest(paths.dest.assets));
});

gulp.task('clean', function() {
    return gulp.src([`${paths.dest.html}*`], { read: false }) // much faster
      .pipe(rimraf());
});

gulp.task('default', ['serve']);

