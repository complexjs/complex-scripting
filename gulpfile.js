'use strict';

let gulp = require('gulp');
let jsdoc = require('gulp-jsdoc3');

gulp.task('doc', function (cb) {
    gulp.src(['./src/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});
