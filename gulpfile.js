var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uncss = require('gulp-uncss');

gulp.task('sass', function() {
  return gulp.src('public/sass/*.scss')
    .pipe(sass()) // gulp-sass module - converts sass to css
    .pipe(gulp.dest('public/css'));
});

gulp.task('minify-css', function() {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('public/css/min'));
});

gulp.task('watch', function() {
  gulp.watch('public/sass/*.scss', ['sass']);
  gulp.watch('public/css/*.css', ['minify-css']);
});
