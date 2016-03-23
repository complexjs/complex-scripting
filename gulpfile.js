var gulp = require('gulp');
var concat = require('gulp-concat');
var version = require('gulp-version-injector');

gulp.task('default', function() {
  return gulp.src([
    './src/**/*.js',
    ])
    .pipe(concat('complex-scripting.js'))
        .pipe(version('package.json'))

    .pipe(gulp.dest('./dist/'));
});
